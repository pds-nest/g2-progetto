import React from "react"
import Style from "./PageHome.module.css"
import classNames from "classnames"
import BoxHeader from "../components/BoxHeader"
import BoxFull from "../components/BoxFull"
import Checkbox from "../components/Checkbox"
import InputWithIcon from "../components/InputWithIcon"
import { faFolder, faPlus } from "@fortawesome/free-solid-svg-icons"
import Radio from "../components/Radio"
import Button from "../components/Button"
import LabelledForm from "../components/LabelledForm"
import Label from "../components/Label"


export default function PageHome({ children, className, ...props }) {
    return (
        <div className={classNames(Style.PageHome, className)} {...props}>
            <BoxHeader className={Style.Header}>
                Create a new repository
            </BoxHeader>
            <BoxFull className={Style.SearchByZone} header={
                <span><Checkbox/> Search by zone</span>
            }>

            </BoxFull>
            <BoxFull className={Style.SearchByHashtags} header={
                <span><Checkbox/> Search by hashtag</span>
            }>

            </BoxFull>
            <BoxFull className={Style.SearchByTimePeriod} header={
                <span><Checkbox/> Search by time period</span>
            }>

            </BoxFull>
            <BoxFull className={Style.CreateDialog} header={"Create repository"}>
                <LabelledForm action={""}>
                    <Label for_={"repo-name"} text={"Repository name"}>
                        <InputWithIcon id={"repo-name"} icon={faFolder}/>
                    </Label>
                    <Label for={"filter-mode"} text={"Add tweets if they satisfy"}>
                        <label>
                            <Radio name={"filter-mode"} value={"or"}/> At least one filter
                        </label>
                        &nbsp;
                        <label>
                            <Radio name={"filter-mode"} value={"and"}/> Every filter
                        </label>
                    </Label>
                    <Button style={{"grid-column": "1 / 3"}} icon={faPlus} color={"Green"}>
                        Create repository
                    </Button>
                </LabelledForm>
            </BoxFull>
        </div>
    )
}
