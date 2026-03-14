
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>

      <div className="row">

        <div className="col-lg-3 col-6">
          <div className="small-box bg-info">
            <div className="inner">
              <h3>150</h3>
              <p>New Orders</p>
            </div>
          </div>
        </div>

        <div className="col-lg-3 col-6">
          <div className="small-box bg-success">
            <div className="inner">
              <h3>53%</h3>
              <p>Bounce Rate</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard
