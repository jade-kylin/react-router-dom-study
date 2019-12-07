import React, { Component } from 'react'

export class Page1 extends Component {
  constructor(props) {
    super(props)
    this.state = {
    };
  };
  render() {
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
          onClick={() => {
            // this.props.history.push('/page2/' + 666 + '')
            this.props.history.push({pathname:'/page2'}) 
            // this.props.history.push({pathname:"/page2",state : { id : '111' }});
          }}
          style={{
            width: '500px',
            height: '200px',
            background: '#fff',
            padding: '30px',
            borderRadius: '10px',
            lineHeight: '200px',
            textAlign: 'center',
          }}>
          我是页面一一一一一一一
          点我可以去页面二
        </div>
      </div>
    )
  }
}

export default Page1
