import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Table, Button, Popconfirm ,} from 'antd';
const Data=[
    {
        TotalScore:13,
        PassCore:12,
        Topics:[
            {
                name:'选择一个工具',
                type:0,
                score:5,
                pic:require('../../assets/img/cognition.jpg'),
                select:[
                    {
                        name:'锤子',
                        score:5
                    },
                    {
                        name:'锅',
                        score:0
                    }
                ]
            },
            {
                name:'选择一个数字',
                type:1,
                score:1,
                select:[
                    {
                        name:'+1',
                        score:1
                    },
                    {
                        name:'+2',
                        score:2
                    },
                    {
                        name:'+3',
                        score:3
                    }
                ]
            }
        ]
    }
]
const Item=(props)=>{
   return props.data.map(item=>{
      return <div>
          <span style={{float:'right',color:'red'}}>总分:{item.TotalScore}</span>
          {item.Topics.map((data,index)=>{
                  return(<div style={{display:'flex',flexDirection:'column'}}>
                          <div>
                          <span style={{fontSize:16}}>{index+1}.{data.name}</span>
                          <span style={{marginLeft:100}}>得分:{data.score}</span>
                          </div>
                          {data.pic?
                              <img src={data.pic} alt="图片" ></img>:null
                          }
                      {data.type===0?
                          <div style={{display:'flex',padding:15,flexDirection:'column'}}>
                              {data.select.map((d,index)=>{
                                  return <div style={{marginRight:200}}>{d.name}</div>
                              })}
                      </div>:
                          <div style={{display:'flex',flexDirection:'column',padding:15}}>
                              {data.select.map((d,index)=>{
                                  return <div style={{marginRight:200}}>{d.name}</div>
                              })}
                          </div>}
                      </div>
                  )

          })}
      </div>

    })
}
export  default class Question extends Component{
    constructor(props){
        super(props)

    }
componentWillMount(){
}

    render(){
        // const {Data}=this.props.state
        return(
            <div>
                <Item data={Data}></Item>
            </div>
        )
    }
}
