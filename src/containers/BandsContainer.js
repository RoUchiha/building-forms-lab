import React, { Component } from 'react'
import { connect } from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => this.props.bands.map((band, id) => <li key={id}>{band.name}</li>)

  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand} bands={this.props.state} />

      <ol>
        {this.renderBands()}
      </ol>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBand: (formData) => dispatch({ type: "ADD_BAND", payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
