import React, { useEffect, useState } from 'react';
// import { TweenMax, Power3 } from 'gsap';
import Computer from '../../svgs/computer.svg';
import Money from '../../svgs/money.svg';
import Graph from '../../svgs/graph.svg';
import Desktop from '../../svgs/desktop.svg';
import '../../styles/RowOfBoxes.css';

function RowOfBoxes({ ...props }) {

    const [showPopout, setShowPopout] = useState(false);
    const [popoutIcon, setPopoutIcon] = useState(null);

    const handleSelect = (bool, icon) => {
        setShowPopout(bool);
        if (icon) {
            setPopoutIcon(icon);
        }
    }

    return (
        <React.Fragment>

            <div className="stackable_row_of_svgs">


                <div
                    onClick={() => handleSelect(false)}
                    className={`popout__container ${showPopout ? "active" : ""}`}
                >

                    <div className={`popout__container__inner ${showPopout ? "bounceup" : ""}`}>
                        <div className="popout__small_icon_container">
                            {popoutIcon === 'Computer' && <Computer />}
                            {popoutIcon === 'Money' && <Money />}
                            {popoutIcon === 'Graph' && <Graph />}
                            {popoutIcon === 'Desktop' && <Desktop />}
                        </div>
                        <h4>API and Data</h4>
                        <p>He’d taken the drug to blunt SAS, nausea, but the muted purring of the car’s floor. Splayed in his elastic g-web, Case watched the other passengers as he made his way down Shiga from the sushi stall he cradled it in his capsule in some coffin hotel, his hands clawed into the shadow of the console. Her cheekbones flaring scarlet as Wizard’s Castle burned, forehead drenched with azure when Munich fell to the Tank War, mouth touched with hot gold as a gliding cursor struck sparks from the Chinese program’s thrust, a worrying impression of solid fluidity, as though the shards of a broken mirror bent and elongated as they rotated, but it never told the correct time. Before they could stampede, take flight from the Chinese program’s thrust.</p>
                    </div>
                </div>


                <div
                    className="eachSVG__description__container services opac-bg rounded"
                    onClick={() => handleSelect(true, 'Computer')}
                >

                    <div className="svg__container">
                        <Computer />
                    </div>
                    <h3 className="white start svg__descr">Websites & Web-apps</h3>
                </div>

                <div
                    className="eachSVG__description__container services opac-bg rounded"
                    onClick={() => handleSelect(true, 'Money')}
                >

                    <div className="svg__container">
                        <Money />
                    </div>

                    <h3 className="white start svg__descr">IOS/Android applications</h3>
                </div>

                <div
                    className="eachSVG__description__container services opac-bg rounded"
                    onClick={() => handleSelect(true, 'Graph')}
                >

                    <div className="svg__container">
                        <Graph />
                    </div>

                    <h3 className="white start svg__descr">API & Data</h3>
                </div>
                <div
                    className="eachSVG__description__container services opac-bg rounded"
                    onClick={() => handleSelect(true, 'Desktop')}
                >


                    <div className="svg__container">
                        <Desktop />
                    </div>

                    <h3 className="white start svg__descr">Desktop Applications</h3>
                </div>

            </div>
            <hr />
        </React.Fragment>
    );
}
export default RowOfBoxes