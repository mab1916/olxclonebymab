import { useDispatch } from 'react-redux';
import { LogoutAction } from "../../../store/actions/AuthActions";

export default function LogOut() {
    const dispatch = useDispatch();
    const doLogoutAction = () => {
        dispatch(LogoutAction())
    }
    return [doLogoutAction];
}