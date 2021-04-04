/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
import React from "react"

import { Formik } from "formik"
import { getUserDetails, updateGuildPrefix } from "../../utils/api"
import { InputGroup, Container, Row, Col } from "react-bootstrap"
import {
    Button,
    Input,
    Select,
    FormLabel,
} from "@chakra-ui/react"

export function GuildConfig({
    history,
    guildId,
    user,
    config,
    roles,
    channels,
    updatePrefix,
    updateRole,
    updateMemberLog

}) {
    const defaultRoleId = config.defaultRole ? config.defaultRole : ""
    const memberLogChannelId = config.memberLogChannel ? config.memberLogChannel : ""

    // console.log(roles)
    return (
        <section className="py-5">
            <section id="main-dashboard-content">
                <section id="grid-container">

                    <section className="grid-item one py-5 bg-light">
                        <div className='prefix-div rounded text-center'>
                            <Formik initialValues={{
                                prefix: config.prefix
                            }}
                                className="align-items-center justify-content-sm-center"
                                onSubmit={({ prefix }) => {
                                    updatePrefix(prefix)
                                }}>
                                {
                                    (props) => (
                                        <form onSubmit={props.handleSubmit} >
                                            <FormLabel>Prefix</FormLabel>
                                            <Input placeholder="input your prefix" className="mr-1 btn btn-outline-success btn-block mb-2 text-left rounded-right" name="prefix" onChange={props.handleChange} defaultValue={config.prefix} />

                                            <Button type="submit" className="main-btn w-25 rounded hvr-round-corners hvr-bob" colorScheme="cyan" children="update Prefix"> Save </Button>
                                        </form>
                                    )
                                }
                            </Formik>
                        </div>
                        <div className="prefix-div rounded text-center">
                            <Formik
                                initialValues={{
                                    defaultRole: defaultRoleId
                                }}
                                className="align-items-center justify-content-sm-center"
                                onSubmit={({ defaultRole }) => {
                                    updateRole(defaultRole)
                                    // console.log(defaultRole)
                                }}>
                                {
                                    (props) => (
                                        <form onSubmit={props.handleSubmit} >

                                             <label htmlFor="AutoRole" calssName="text-center" > Auto Role </label>
                                            <Select name="defaultRole" id="AutoRole" className="btn-block selectRole mb-2" onChange={props.handleChange}>
                                                {roles.map((role) => (
                                                    <option selected= {role.id === defaultRoleId} value={role.id}  >{role.name}</option>
                                                ))}
                                            </Select>
                                            <Button type="submit" className="main-btn w-25 rounded hvr-round-corners hvr-bob" colorScheme="cyan" children="update Role"> Save </Button>
                                        </form>
                                    )
                                }
                            </Formik>
                        </div>
                    </section> {/*  1 */}
                    <section className="grid-item two py-5 bg-dark">
                    <div className="prefix-div rounded text-center">
                            <Formik
                                initialValues={{
                                    memberLogChannel: memberLogChannelId
                                }}
                                className="align-items-center justify-content-sm-center"
                                onSubmit={({ memberLogChannel }) => {
                                    updateMemberLog(memberLogChannel)
                                    console.log(memberLogChannel)
                                }}>
                                {
                                    (props) => (
                                        <form onSubmit={props.handleSubmit} >
                                             <label htmlFor="MemberLogChannel" calssName="text-center" > MemberLog Channel </label>
                                            <Select name="MemberLogChannel" id="MemberLogChannel" className="btn-block selectRole mb-2" onChange={props.handleChange}>
                                                {channels.map((channel) => (
                                                    <option selected= {channel.id === memberLogChannelId} value={channel.id}>{channel.name}</option>
                                                ))}
                                            </Select>
                                            <Button type="submit" className="main-btn w-25 rounded hvr-round-corners hvr-bob" colorScheme="cyan" children="update Role"> Save </Button>
                                        </form>
                                    )
                                }
                            </Formik>
                        </div>
                    </section> {/*  2 */}
                </section> {/* Body Section  */}
            </section> {/**main-dashboard-content */}
        </section >
    );
}



export function GuildWelcome({
    guilds,

}) {



    return (
        <section>

            <h1>hello from Welcome</h1>
        </section>
    );
}

