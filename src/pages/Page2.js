import React, { Component } from 'react'

export class Page2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
    // console.log(this.props.location.state.id)
    console.log(this.props.location.params)
    return (
      <div style={{
        width: '100%',
        height: window.innerHeight,
        background: '#001D37',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div
         onClick={()=>{
          this.props.history.push('/')
          // this.props.history.push({pathname:'/'}) 
          // this.props.history.push({pathname:"/",state : { id : '222' }});
        }}
        style={{
          width: '500px',
          height: '200px',
          background: '#ff0',
          padding: '30px',
          borderRadius: '10px',
          textAlign:'center',
          lineHeight:'200px',
        }}>
          我是页面二二二二二二二二
          点我可以去页面一
        </div>
      </div>
    )
  }
}

export default Page2
