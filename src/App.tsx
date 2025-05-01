import BasicLayout from './layout/BasicLayout.tsx'; // 少量公共样式
function App() {
  return (
    <>
      <div
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        <BasicLayout></BasicLayout>
      </div>
    </>
  );
}
export default App;
