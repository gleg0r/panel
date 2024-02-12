import React, { Component } from 'react'
import { Card, Table, Tag, message,  } from 'antd';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { connect } from 'react-redux';
import axios from 'axios';
import { API_BASE_URL, APP_PREFIX_PATH } from 'configs/AppConfig';
import Loading from 'components/shared-components/Loading';
import { getUserData } from 'redux/actions/Users';

export class UserList extends Component {
	
	state = {
		users: null,
		userProfileVisible: false,
		selectedUser: null,
		loading: false,
		log: null,
	}
	
	componentDidMount() {
		this.setState({ loading: true });
		axios.get(`${API_BASE_URL}/users`).then((responce) => {
			this.setState({users: responce.data});
			this.setState({ loading: false });
		})
	}

	deleteUser = userId => {
		this.setState({
			users: this.state.users.filter(item => item.id !== userId),
		})
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	showUserProfile = userInfo => {
		this.setState({
			userProfileVisible: true,
			selectedUser: userInfo
		});
	};
	
	closeUserProfile = () => {
		this.setState({
			userProfileVisible: false,
			selectedUser: null
    });
	}

	nextPath = (path) => {
		this.props.history.push(path);
	}

	render() {
		const { users, selectedUser } = this.state;

		const tableColumns = [
			{
				title: 'User',
				dataIndex: 'name',
				render: (_, record) => (
					<div className="d-flex">
						<AvatarStatus name={record.name} subTitle={record.email}/>
					</div>
				),
				sorter: {
					compare: (a, b) => {
						a = a.name.toLowerCase();
  						b = b.name.toLowerCase();
						return a > b ? -1 : b > a ? 1 : 0;
					},
				},
			},
			{
				title: 'User name',
				dataIndex: 'username',
				sorter: {
					compare: (a, b) => a.username.length - b.username.length,
				},
			},
			{
				title: 'Phone',
				dataIndex: 'phone',
				render: phone => (
					<span>{phone}</span>
				),
				sorter: (a, b) => a.phone.length - b.phone.length
			},
			{
				title: 'Website',
				dataIndex: 'website',
				render: status => (
					<Tag className ="text-capitalize" color={'cyan'}>{status}</Tag>
				),
				sorter: {
					compare: (a, b) => a.website.length - b.website.length,
				},
			},
		];

		return (
			this.state.loading 
			? <Loading />
			: <Card onClick={() => this.nextPath(`${APP_PREFIX_PATH}/setting`)} bodyStyle={{'padding': '0px'}}>
				<Table columns={tableColumns} dataSource={users} rowKey='id' />
			</Card>
		)
	}
}


function mapStateToProps({ users }) {
	return { users }
}


export default connect(mapStateToProps)(UserList)
