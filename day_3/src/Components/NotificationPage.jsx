import { useNotification } from "./Context/NotificationContext";
import { useTheme } from "./Context/ThemeContext";

function NotificationPage() {
    const { addNotification, clearNotifications, dismissNotifications, state } = useNotification();
    const { theme } = useTheme();

    return (
        <div style={{ margin: 100 }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow" style={{ backgroundColor: theme === "dark" ? "darkslategrey" : "#d7d7d7", color: theme === "dark" ? "white" : "black" }}>
                            <div className="card-body text-center">
                                <h5 className="card-title mb-3" >Manage Notifications</h5>
                                <div className="d-grid gap-2">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => addNotification("You have a new notification!")}
                                    >
                                        Add Notification
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-warning"
                                        onClick={clearNotifications}
                                    >
                                        Clear Notifications
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow" style={{ backgroundColor: theme === "dark" ? "darkslategrey" : "#d7d7d7", color: theme === "dark" ? "white" : "black" }}>
                            <div className="card-body">
                                <h5 className="card-title text-center mb-4">Notifications</h5>
                                {state.notifications.length > 0 ? (
                                    <div className="list-group" >
                                        {state.notifications.map((notif) => (
                                            <div
                                                key={notif.id}
                                                className="list-group-item d-flex justify-content-between align-items-center" style={{ backgroundColor: theme === "dark" ? "rgb(49,49,49)" : "#f1f1f1", color: theme === "dark" ? "white" : "black" }}
                                            >
                                                <div>
                                                    {notif.message}
                                                </div>
                                                <div>
                                                    {!notif.read && (
                                                        <button
                                                            className={`btn btn-close btn-close-${theme === "dark" ? "white" : ""} btn-sm me-2`}
                                                            onClick={() => dismissNotifications(notif.id)}
                                                        >
                                                        </button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-center">No new notifications.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotificationPage;
