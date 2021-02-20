import { useState, useEffect } from 'react'
import styles from './Users.module.css'
import MainLabel from '../core/MainLabel/MainLabel'
import { useSelector, useDispatch } from 'react-redux'
import { sortUsers } from '../../redux/actions/users'


const Users = () => {
    const dispatch = useDispatch()
    let users = useSelector(state => state.users.users, () => { })
    const [columnsState, setColumnsState] = useState({ username: 'asc', email: 'asc', username: 'asc' })

    useEffect(() => {

    }, [users])

    const sortArray = key => {
        let sorted
        if (columnsState[key] === 'asc') {
            sorted = users.sort((a, b) => {
                if (a[key] < b[key]) { return -1; }
                if (a[key] > b[key]) { return 1; }
                return 0;
            });
            setColumnsState({ ...columnsState, [key]: 'desc' })
        } else {
            sorted = users.sort((a, b) => {
                if (a[key] > b[key]) { return -1; }
                if (a[key] < b[key]) { return 1; }
                return 0;
            });
            setColumnsState({ ...columnsState, [key]: 'asc' })
        }

        dispatch(sortUsers(sorted))
    };

    const createUsersTable = () => {
        if (users.length > 0) {
            return (
                <table className={styles.usersTable}>
                    <thead>
                        <tr>
                            <th >Username <i className="fas fa-sort" style={{ cursor: "pointer" }} onClick={() => sortArray('username')}></i></th>
                            <th>Email <i className="fas fa-sort" style={{ cursor: "pointer" }} onClick={() => sortArray('email')}></i></th>
                            <th>Age <i className="fas fa-sort" style={{ cursor: "pointer" }} onClick={() => sortArray('age')}></i></th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, i) => (
                            <tr key={i}>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )
        }
    }

    return (
        <div>
            <MainLabel text="Users List" />
            {createUsersTable()}
        </div>
    )
}

export default Users
