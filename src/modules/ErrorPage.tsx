import { AxiosError } from 'axios';
import { NextPageContext } from 'next';
import NotFoundPage from './NotFoundPage';

interface Props {
  // eslint-disable-next-line react/no-unused-prop-types
  error?: NextPageContext['err'];
  statusCode: number;
}

const ErrorPage = ({ statusCode }: Props) => {
  switch (statusCode) {
    case 404:
      return <NotFoundPage />;

    default:
      return (
        <p>Error</p>
      );
  }
};

ErrorPage.getInitialProps = ({ res, err: error }: NextPageContext): Props => {
  let statusCode = res?.statusCode;

  if (error) {
    const axiosError = error as AxiosError;

    if (axiosError.isAxiosError) {
      statusCode = axiosError.response?.status;
    }
  }
  return {
    error,
    statusCode: statusCode ?? 500,
  };
};
export default ErrorPage;
