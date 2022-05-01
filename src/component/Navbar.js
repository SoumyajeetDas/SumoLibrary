import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
  
        return (
            <>
                <nav className={`navbar navbar-expand-lg navbar-${this.props.toggling}`} style={this.props.navbar}>
                    <div className="container-fluid">
                        <a id="brandname" className="navbar-brand" href="/">
                            <img src="connecting_airports_FILL0_wght400_GRAD0_opsz48.png" class="me-2" alt="loading...." width={40} height={40} style={{ display: "inline" }}></img>
                            <h3 style={{ display: "inline" }}>Sumo Library</h3>
                        </a>

                        <div id="modes" class="rounded-pill p-0" style={this.props.toggleStyle}>
                            <span class="material-symbols-outlined me-2 rounded-pill p-1" style={this.props.lightToggle} onClick={()=>this.props.toggle("light")}>
                                light_mode
                            </span>
                            <span class="material-symbols-rounded ms-2 rounded-pill p-1" style={this.props.darkToggle} onClick={()=>this.props.toggle("dark")}>
                                dark_mode
                            </span>
                           
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar
