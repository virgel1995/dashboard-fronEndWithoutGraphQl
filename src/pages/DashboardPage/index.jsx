/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */

import React from "react"
import { GuildConfig, GuildWelcome } from "../../components"

import {
    getUserDetails,
    getGuildConfig,
    updateGuildPrefix,
    updateDefaultRole,
    getGuildRoles
} from "../../utils/api"




export function DashboardPage({
    history,
    match
}) {
    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const [config, setConfig] = React.useState({})
    const [roles, setRoles] = React.useState([])
    React.useEffect(() => {
        getUserDetails()
            .then(({ data }) => {
                console.log(data);
                setUser(data);
                return getGuildConfig(match.params.id)
            })
            .then(({ data }) => {
                console.log(data)
                setConfig(data)
                return getGuildRoles(match.params.id)
            })
            .then(({ data }) => {
                console.log(data)
                setRoles(data)
                setLoading(false)
            })
            .catch((e) => {
                history.push("/");
                setLoading(false);
            });
 // eslint-disable-next-line     
    }, []);

    const updateGuildPrefixParent = async (prefix) => {
        try {
            const update = updateGuildPrefix(match.params.id, prefix)
            console.log(update)
        } catch (e) {
            console.error(e.message)
        }
    }

    const updateGuildRoleParent = async (roleId) => {
        try {
            // const update = updateGuildPrefix(match.params.id, prefix)
            const update = updateDefaultRole(match.params.id, roleId)
            console.log(update)

        } catch (e) {
            console.error(e.message)
        }
    }


    return !loading && (
        <div>
            <h1 className="text-center">DashboardPage </h1>
            <GuildConfig
                user={user}
                config={config}
                roles={roles}
                updatePrefix={updateGuildPrefixParent}
                updateRole={updateGuildRoleParent}


            />
            {/* <GuildWelcome /> */}

        </div>

    );
}




// DashboardPage