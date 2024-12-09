import { createContext, useContext, useReducer } from "react";

const NotificationContext = createContext(null);

const initialState = {
    notifications: [
        { id: 1, message: "First Notification", read: false },
        { id: 2, message: "Second Notification", read: false },
        { id: 3, message: "Third Notification", read: false },
    ],
    notifCount: 3,
};

const notificationReducer = (state, action) => {
    switch (action.type) {
        case "ADD_NOTIFICATION":
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    { id: Date.now(), message: action.payload, read: false },
                ],
                notifCount: state.notifCount + 1,
            };
        case "DISMISS":
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notif) => notif.id !== action.payload
                ),
                notifCount: state.notifCount > 0 ? state.notifCount - 1 : 0,
            };
        case "CLEAR_ALL":
            return {
                ...state,
                notifications: [],
                notifCount: 0,
            };
        default:
            return state;
    }
};

export const NotificationProvider = ({ children }) => {
    const [state, dispatch] = useReducer(notificationReducer, initialState);

    const addNotification = (message) => {
        dispatch({ type: "ADD_NOTIFICATION", payload: message });
    };

    const clearNotifications = () => {
        dispatch({ type: "CLEAR_ALL" });
    };

    const dismissNotifications = (id) => {
        dispatch({ type: "DISMISS", payload: id });
    };

    return (
        <NotificationContext.Provider
            value={{ addNotification, clearNotifications, dismissNotifications, state }}
        >
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = () => {
    return useContext(NotificationContext);
};
