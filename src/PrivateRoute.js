import { Route, Redirect } from 'react-router-dom'
import { useAuthValue } from './components/header/AuthContext'

export default function PrivateRoute({component:Component, ...rest}) {
    const {currentUser} = useAuthValue()

    return(
        <Route
            {...rest}
            render={props => {
                return currentUser?.emailVerified? <Component {...props} /> : <Redirect to='/Profile'/>
            }}>
        </Route>
    )
}