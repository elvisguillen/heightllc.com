const getTransitionStyles = timeout => {
    return {
      entering: {
        opacity: 0,
        transform: `translateY(100px)`
      },
      entered: {
        transition: `all ${timeout}ms cubic-bezier(.58,.02,.45,1)`,
        opacity: 1
      },
      exiting: {
        transition: `all ${timeout}ms cubic-bezier(.58,.02,.45,1)`,
        opacity: 0,
        transform: `translateY(100px)`
      },
    }
  }
  
  const getTransitionStyle = ({ timeout, status }) =>
    getTransitionStyles(timeout)[status]
  
  export default getTransitionStyle