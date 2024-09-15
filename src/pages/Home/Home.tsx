import { Button } from 'antd';

export const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Button
        onClick={() => {
          window.location.href = '/edit';
        }}
      >
        Editor
      </Button>
    </div>
  );
};
