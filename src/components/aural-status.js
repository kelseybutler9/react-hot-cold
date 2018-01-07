import React from 'react';

export default function AuralStatus(props) {
  return (
    <p
      id="status-readout"
      className="visuallyhidden"
      aria-live="assertive"
      aria-atomic="true"
    >
      {props.auralStatus}
    </p>
  );
}

const mapStateToProps = state => ({auralStatus: state.auralStatus});

export default connect(mapStateToProps)(AuralStatus);
