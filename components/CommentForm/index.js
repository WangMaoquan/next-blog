import { Form, Input, Button, Divider } from 'antd';
import '../../styles/components/comment.css';
import { values } from 'lodash';
const TextArea = Input.TextArea;
const buttonStyle = {
  margin: '0 8px'
};

const CommentForm = ({ onCancel, onOk, isReply = false }) => {
  const [form] = Form.useForm();
  const onFinish = values => {
      onOk(values).then((result) => {
        !!result && form.setFieldsValue({ com_name: '', comment: '' });
      });
     //console.log(values)
  };
  return (
    <div className="comment-div">
      <Divider style={{ color: '#1890ff' }}>欢迎留言</Divider>
      <Form layout="horizontal" onFinish={onFinish} form={form} >
        <Form.Item rules={[{ required: true, message: '请输入昵称' }]} name="com_name">
          <Input placeholder="请输入昵称" />
        </Form.Item>
        <Form.Item
          name="comment"
          rules={[
            {
              required: true,
              message: `请输入${isReply ? '回复' : '评论'}内容`
            }
          ]}
        >
          <TextArea
            rows={4}
            placeholder={`请输入${isReply ? '回复' : '评论'}内容`}
          />
        </Form.Item>
        <Form.Item style={{ textAlign: 'center' }}>
          {isReply && (
            <Button style={buttonStyle} onClick={onCancel}>
              {' '}
              取消{' '}
            </Button>
          )}
          <Button type="primary" style={buttonStyle} htmlType="submit">
            {' '}
            提交{isReply ? '' : '评论'}{' '}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CommentForm;
