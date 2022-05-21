class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = (props) => {
      return <p>{props.name}</p>
    };
    
    // Change code below this line
    Camper.propTypes = {name: PropTypes.string.isRequired};
    // Change code above this line
    
    Camper.defaultProps = {
      name: 'CamperBot'
    };
    
   