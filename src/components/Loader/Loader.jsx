import { Hourglass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      (<Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={['#306cce', '#72a1ed']}
  />)

    </div>
  );
}