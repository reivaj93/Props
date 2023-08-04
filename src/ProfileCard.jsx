import React, {useState} from "react";



function ProfileCard({usuario}) {
    return(
            <>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Usuario</h5>
                        <h6 className="card-subtitle mb-2 text-muted">Nombre: {usuario.nombre}</h6>
                        <p className="card-text">Edad: {usuario.edad}</p>
                        <p className="card-text">Hobby: {usuario.hobby}</p>

                    </div>
                </div> 
            </>
        )

    }

export default ProfileCard
