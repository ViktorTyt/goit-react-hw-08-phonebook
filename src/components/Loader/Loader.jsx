import { ThreeDots } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <ThreeDots color="#ff7700" />
    </LoaderBox>
  );
};
