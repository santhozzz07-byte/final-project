import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {

  return (

    <div className="container">

      <h2>Dashboard</h2>

      <Link to="orders">Orders</Link>

      <br />

      <Link to="users">Users</Link>

      <Outlet />

    </div>

  );
}