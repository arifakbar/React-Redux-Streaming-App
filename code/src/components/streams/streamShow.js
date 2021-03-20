import React from 'react';
import {connect} from 'react-redux';
import flv from 'flv.js';
import { fetchStream } from '../../actions/index';

class StreamShow extends React.Component {
        constructor(props){
                super(props);
                this.videoRef = React.createRef();
        }
        componentDidMount(){
                this.props.fetchStream(this.props.match.params.id);
                this.createPlayer();
        }
        componentDidUpdate(){
                this.createPlayer();
        }
        componentWillUnmount(){
                this.player.destroy();
        }
        createPlayer(){
                if(this.player || !this.props.stream){
                        return;
                }
                this.player = flv.createPlayer({
                        type:"flv",
                        url:`http://localhost:8000/live/${this.props.match.params.id}.flv`
                });
                this.player.attachMediaElement(this.videoRef.current);
                this.player.load();
        }
        render(){
                if(!this.props.stream){
                        return <div>Loading...</div>;
                }
                return(
                        <div>
                                <video ref={this.videoRef} style={{width:"100%"}} controls/>
                                <h3>{this.props.stream.title}</h3>
                                <p>{this.props.stream.description}</p>
                        </div>
                )
        }
}

const mapStateToProps = (state,ownProps) => {
        return {stream:state.streamReducer[ownProps.match.params.id]}
}

export default connect(mapStateToProps,{fetchStream:fetchStream})(StreamShow);