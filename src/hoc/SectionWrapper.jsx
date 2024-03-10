const SectionWrapper = (Component, id) =>
  function HOC(props) {
    return (
      <>
        <span className='anchor-span' id={id}>
          &nbsp;
        </span>
        <Component {...props} />
      </>
    );
  };

export default SectionWrapper;
