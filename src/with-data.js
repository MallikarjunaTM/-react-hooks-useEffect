import React from 'react';

const withdata =(WrappedComponent)=>{
    class Withdata extends React.Component{
        constructor(props){
            super(props);
            this.state={
                data:[]
            }
        }
    
        componentDidMount(){
            fetch(this.props.dataSource).then(
                resp=>resp.json()).then(data=>this.setState({data:data.slice(0,3)}))
        }
    
        render(){
            const {data} = this.state;
            return data.length<1?(<h1>Loading</h1>):(<WrappedComponent data={data} {...this.props}/>)

         }
    }

    return Withdata;
}

export default withdata;