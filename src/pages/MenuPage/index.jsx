/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import { MenuComp, MenuNavbar, MenuFooter } from "../../components"
import { getUserDetails, getGuilds } from "../../utils/api"
import { Image } from 'react-bootstrap';

export function MenuPage({
    history,
}) {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [guilds, setGuilds] = React.useState({})
    React.useEffect(() => {
        getUserDetails()
            .then(({ data }) => {
                // console.log(data);
                setUser(data);
                return getGuilds()
            })
            .then(({ data }) => {
                console.log(data)
                setGuilds(data)
                setLoading(false);
            })
            .catch((e) => {
                history.push("/");
                setLoading(false);
                console.log(e)
            })
    }, [])
    return !loading && (
        <div>
        <h1>menu Page</h1>
<MenuComp
 guilds={ guilds}
/>


        </div>

    )
}