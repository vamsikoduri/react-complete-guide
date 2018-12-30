import React,{ Component } from 'react';


export default class ErrorBoundary extends Component{
    state={
        hasError:false,
        errorMeassge : ""
    }

    ComponentDidCatch(error,info)
    {
        this.state.state({hasError:true,errorMeassge:error});

    }

    render(){

        if(this.state.hasError)
        {
            return <h1>{this.state.errorMeassge}</h1>
        }

        return this.props.children;
    }
}