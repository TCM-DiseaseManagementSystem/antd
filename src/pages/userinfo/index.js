import React, { Component } from 'react';
import {
    Table, message, Input, Button, Popconfirm, Form,Modal,Row,Col, Radio, DatePicker, Select
} from 'antd';
import {Link} from "react-router-dom";
import $ from "jquery";
import './index.less';
import Api from '../../common/Api';
const FormItem = Form.Item;
const Search = Input.Search;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
    <EditableContext.Provider value={form}>
        <tr {...props} />
    </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);
class EditableTable extends  Component{
    constructor(props) {
        super(props);
        this.state = {
            editing: false,
        }
    }

    componentDidMount() {
        if (this.props.editable) {
            document.addEventListener('click', this.handleClickOutside, true);
        }
    }

    componentWillUnmount() {
        if (this.props.editable) {
            document.removeEventListener('click', this.handleClickOutside, true);
        }
    }

    toggleEdit = () => {
        const editing = !this.state.editing;
        this.setState({ editing }, () => {
            if (editing) {
                this.input.focus();
            }
        });
    };

    handleClickOutside = (e) => {
        const { editing } = this.state;
        if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
            this.save();
        }
    };

    save = () => {
        const { record, handleSave } = this.props;
        this.form.validateFields((error, values) => {
            if (error) {
                return;
            }
            this.toggleEdit();
            handleSave({ ...record, ...values });
        });
    };

    render() {
        const { editing } = this.state;
        const {
            editable,
            dataIndex,
            title,
            record,
            index,
            handleSave,
            ...restProps
        } = this.props;
        return (
            <td ref={node => (this.cell = node)} {...restProps}>
                {editable ? (
                    <EditableContext.Consumer>
                        {(form) => {
                            this.form = form;
                            return (
                                editing ? (
                                    <FormItem style={{ margin: 0 }}>
                                        {form.getFieldDecorator(dataIndex, {
                                            rules: [{
                                                required: true,
                                                message: `${title} is required.`,
                                            }],
                                            initialValue: record[dataIndex],
                                        })(
                                            <Input
                                                ref={node => (this.input = node)}
                                                onPressEnter={this.save}
                                            />
                                        )}
                                    </FormItem>
                                ) : (
                                    <div
                                        className="editable-cell-value-wrap"
                                        style={{ paddingRight: 24 }}
                                        onClick={this.toggleEdit}
                                    >
                                        {restProps.children}
                                    </div>
                                )
                            );
                        }}
                    </EditableContext.Consumer>
                ) : restProps.children}
            </td>
        );
    }
}

export default class UserInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [],
            count: 2,
            loading: false,
            modal1Visible: false,
            modal2Visible: false,
            modal3Visible: false,
            nameText: '',
            pyText: '',
            selectedRowKeys: [],
            Respondent : {
                Id: "",
                Name: "",
                Gender: 0,
                Born: new Date().Format("yyyy-MM-dd"),
                Education: "",
                MaritalStatus: 0,
                DwellingStatus: 0,
                Hobby: "",
                Phone: "",
                IDCard: "",
                Address: "",
                RecordUserId: "3c5e636a-c182-4ad7-a7b1-9205bbe534f5",
                CreatedAt: ""
            },
        };
        this.columns = [
            {
                title: '姓名',
                dataIndex: 'Name',
                editable: true,
                align: 'center'
            },
            {
                title: '性别',
                dataIndex: 'Gender',
                align: 'center'
            },
            {
                title: '出生日期',
                dataIndex: 'Born',
                align: 'center'
            },
            {
                title: '家庭地址',
                dataIndex: 'Address',
                align: 'center'
            },
            {
                title: '最近一次使用',
                dataIndex: 'UpdatedAt',
                align: 'center'
            },
            {
                title: '操作',
                dataIndex: 'operation',
                align: 'center',
                render: (text, record) => (
                    this.state.dataSource.length >= 1
                        ? (
                            <div>
                                <Link to="/history"><Button onClick={() => this.handleEdit} className={'btn'}>查看</Button></Link>
                                <Popconfirm title="确认删除?" onConfirm={() => this.handleDelete(record.Id)} okText="确认" cancelText="取消">
                                    <Button>删除</Button>
                                </Popconfirm>
                            </div>
                        ) : null
                ),
            }
        ];
        this.handleEdit = this.handleEdit.bind(this);
    }

    componentWillMount(){
        this.searchRespondent()
    }

    handleEdit() {
        window.location.reload();
    }

    //选中记录条数
    onSelectChange = (selectedRowKeys) => {
        this.setState({ selectedRowKeys });
    };



    //显示增加疾病Modal
    setModal3Visible = () => {
        this.setState({
            modal3Visible: !this.state.modal3Visible,
        });
    };

    //确认编辑、修改、删除
    handleOk = (e) => {
        this.setState({
            visible: false,
        });
    };

    //取消编辑、修改、删除
    handleCancel = (e) => {
        this.setState({
            modal1Visible: false,
            modal2Visible: false,
            modal3Visible: false,
        });
    };


    //删除一条疾病
    handleDelete = (key) => {
        let _this = this;
        $.ajax({
            type:"Post",
            url:Api+"/visit/delete/deleteOne",
            data:{Id:key},
            dataType:"Json",
            success: (data)=> {
                if(data.Success){
                    message.success('Delete Success');
                }else {
                    message.warning('Delete failed');
                }
                _this.searchRespondent();
                // clear();
            },
            async:true
        })
    };

    //批量删除
    handleDeleteAll=()=>{
        const dataKey=[...this.state.selectedRowKeys];
        let _this = this;
        $.ajax({
            type:"Post",
            url:Api + "/visit/delete/batchDelete",
            data:{"Ids":dataKey},
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "cache-control": "no-cache",
            },
            traditional:true,
            dataType:"Json",
            success: (data)=> {
                if(data.Success){
                    message.success('Delete Success');
                }else {
                    message.warning('Delete failed');
                }
                _this.searchRespondent();
            },
            async:true
        })
    };

    //添加受访者
    handleAdd = () => {
        let { Respondent } = this.state;
       let _this = this;
        this.setModal3Visible();
         $.ajax({
            type:"POST",
            url:Api+"/visit/change/addOrUpdate",
            data:{...Respondent},
            dataType:"Json",
            success: (data)=> {
                if(data.Success){
                    message.success('Add Success');
                }else {
                    message.warning('Add failed');
                }
                _this.searchRespondent();
                // clear();
            },
            async:true
        })
    };

    handleSave = (row) => {
        const newData = [...this.state.dataSource];
        const index = newData.findIndex(item => row.key === item.key);
        const item = newData[index];
        newData.splice(index, 1, {
            ...item,
            ...row,
        });
        this.setState({ dataSource: newData });
    };

    //搜索受访者
    searchRespondent = key => {
        let set =(data)=> {
            this.setState({dataSource:data.Data})
        };
        $.ajax({
            type:"GET",
            url:Api+ "/visit/get/GetByKey",
            data:{key:key},
            dataType:"Json",
            success:function (data) {
                set(data)
            },
            async:true
        })

    };

    //恢复受访者状态
    clearRespondent = () => {
        this.state.Respondent = {
            Id: "",
            Name: "",
            Gender: 0,
            Born: "",
            Education: "",
            MaritalStatus: 0,
            DwellingStatus: 0,
            Hobby: "",
            Phone: "",
            IDCard: "",
            Address: "",
            RecordUserId: "3c5e636a-c182-4ad7-a7b1-9205bbe534f5",
            CreatedAt: ""
        }
    };

    render() {
        const { dataSource, selectedRowKeys, Respondent } = this.state;
        const hasSelected = selectedRowKeys.length > 0;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const components = {
            body: {
                row: EditableFormRow,
                // cell: EditableCell,
            },
        };
        const columns = this.columns.map((col) => {
            if (!col.editable) {
                return col;
            }
            return {
                ...col,
                onCell: record => ({
                    record,
                    editable: col.editable,
                    dataIndex: col.dataIndex,
                    title: col.title,
                    handleSave: this.handleSave,
                }),
            };
        });
        return (
            <div className='content'>
                <div style={{ marginBottom: 16 }}>
                    <Button onClick={this.setModal3Visible}  style={{ marginRight: 5, marginBottom: 16 }}>
                        添加患者
                    </Button>
                    <Modal
                        title='添加患者'
                        okText='添加'
                        cancelText='取消'
                        className={"form-modal1"}
                        visible={this.state.modal3Visible}
                        bodyStyle={{ padding: '32px 40px 48px' }}
                        onOk={this.handleAdd}
                        onCancel={this.handleCancel}
                    >
                        <Input placeholder="请输入患者名字" onChange={value => Respondent.Name = value.target.value} className={"name-input"} />
                        <RadioGroup onChange={value => Respondent.Gender = value.target.value}
                                    defaultValue={0}>
                            <Radio value={1}>男</Radio>
                            <Radio value={0}>女</Radio>
                        </RadioGroup>
                        <DatePicker placeholder={"请选择患者出生日期"}
                                    onChange={value => Respondent.Born = value.format("YYYY-MM-DD")}
                        />
                        <Input placeholder="请输入患者教育程度" onChange={value => Respondent.Education = value.target.value} className={"name-input"} />
                        <Select defaultValue={0} style={{ width: 120 }} placeholder={"请选择患者婚姻状况"}
                                onChange={value => Respondent.MaritalStatus = value}>
                            <Option value={0}>未婚</Option>
                            <Option value={1}>已婚</Option>
                        </Select>
                        <Select defaultValue={0} style={{ width: 120 }} placeholder={"请选择患者居住状况"}
                                onChange={value => Respondent.DwellingStatus = value}>
                            <Option value={0}>独自居住</Option>
                            <Option value={1}>夫妻同居</Option>
                            <Option value={2}>子女同居</Option>
                        </Select>
                        <Input placeholder="请输入患者爱好" onChange={value => Respondent.Hobby = value.target.value} className={"name-input"} />
                        <Input placeholder="请输入患者手机号码" onChange={value => Respondent.Phone = value.target.value} className={"name-input"} />
                        <Input placeholder="请输入患者身份证号" onChange={value => Respondent.IDCard = value.target.value} className={"name-input"} />
                        <Input placeholder="请输入患者住址" onChange={value => Respondent.Address = value.target.value} className={"name-input"} />
                    </Modal>
                    <Popconfirm title="确认删除?" onConfirm={() => this.handleDeleteAll()} okText="确认" cancelText="取消">
                        <Button
                            disabled={!hasSelected}
                        >
                            批量删除
                        </Button>
                    </Popconfirm>
                    <span style={{ marginLeft: 8 }}>
                     {hasSelected ? `选中 ${selectedRowKeys.length} 条记录` : ''}
                     </span>
                    <Search
                        placeholder="根据姓名查询患者"
                        onSearch={value => this.searchRespondent(value)}
                        style={{ width: 400, marginLeft: 900 }}
                    />
                </div>
                <Table
                    components={components}
                    rowSelection={rowSelection}
                    rowClassName={() => 'editable-row'}
                    dataSource={dataSource}
                    columns={columns}
                    rowKey = {record => record.Id}
                />
            </div>
        );
    }
}