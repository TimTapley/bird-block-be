
import BackToProfileButton from "./NewPostReturnToProfile";
import {Stack} from "@mui/material";
import React from "react";
import NewPostTitle from "./NewPostPageTitle";
// const banner = new MDCBanner(document.querySelector('.mdc-banner'));

function NewPostHeader(props) {
    return (
        <div className="mdc-banner" role="banner" >
            <div className="mdc-banner__content"
                 role="alertdialog"
                 aria-live="assertive" >
                <Stack direction="row" spacing={4}  sx={{mb: 10}}>
                    <BackToProfileButton />
                </Stack>
                <div className="mdc-banner__graphic-text-wrapper">
                    <div className="mdc-banner__text" >
                        <NewPostTitle />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewPostHeader;