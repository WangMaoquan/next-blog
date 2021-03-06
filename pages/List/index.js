import React, { useState, useEffect } from "react";
import { List } from "antd";
import axios from "axios";
import servicePath from "../../Api";
import Layout from "../../components/Layout";
import ListItem from '../../components/ListItem';

const ArticleList = ({ list }) => {
  const [mylist, setMylist] = useState(list.data);
  const [typeName, setTypeName] = useState();
  useEffect(() => {
    setMylist(list.data);
    // console.log(mylist);
    if(mylist ==''){
      setTypeName("暂无文章");
    }else{
      setTypeName(mylist[0].typeName);
      
    }
  });

  return (
    <Layout pageTitle="列表 | decade W的个人博客">
      <div className="comm-left-small">
      <List
        header={<div className="type-name">{typeName}</div>}
        itemLayout="vertical"
        dataSource={mylist}
        renderItem={item => <ListItem item={item} />}
      />
      </div>
    </Layout>
  )
};

ArticleList.getInitialProps = async context => {
  let id = context.query.id;
  const result = await axios(servicePath.getListById + id)

  return { list: result.data };
};

export default ArticleList;
