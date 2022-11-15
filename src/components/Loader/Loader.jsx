import { Oval } from 'react-loader-spinner';
// import css from './Loader.module.css';

export const Loader = () => {
  return (
    // <div className={css.spiner}>
    <div>
      <Oval
        height={40}
        width={40}
        color="#ff9d00"
        wrapperStyle={{}}
        // wrapperClass={css.spinerItem}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#faba54"
        strokeWidth={3}
        strokeWidthSecondary={4}
      />
      {/* <p className={css.title}> */}
      <p>
        Please wait ...
      </p>
    </div>
  );
};
