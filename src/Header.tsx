import React, { useState, useEffect } from 'react'
import './Header.css'

interface Props {
	name?: string;
}
function Header(props: Props) {
	const [isOpen, setisOpen] = useState(false);
	const [isHidden, setisHidden] = useState(false);
	const [pos1, setpos1] = useState(window.pageYOffset);
	const [pos2, setpos2] = useState(window.pageYOffset);
	const onScroll = (() => {
		if (isOpen) return;
		if (!isHidden && window.pageYOffset - pos1 >= 100 && window.pageYOffset >= 400) {
			setisHidden(true);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		} else if (!isHidden) {
			setpos1(Math.min(pos1, window.pageYOffset));
		}
		if (isHidden && pos2 - window.pageYOffset >= 100) {
			setisHidden(false);
			setpos1(window.pageYOffset);
			setpos2(window.pageYOffset);
		} else if (isHidden) {
			setpos2(Math.max(pos2, window.pageYOffset));
		}
	})
	const onKeyDown = (() => { if (isOpen) setisOpen(false) });
	useEffect(() => {
		document.addEventListener("scroll", onScroll);
		document.addEventListener("click", onKeyDown);
		return (): void => {
			document.removeEventListener("scroll", onScroll);
			document.removeEventListener("click", onKeyDown);
		}
	});
	return (
		<header className={(isHidden ? "hidden" : "tapu")}>
			<div className={"hideLayer " + (isOpen ? "active" : "inactive")} />
			<div className={"humburger " + (isOpen ? "active" : "inactive")}
				onClick={() => setisOpen(!isOpen)}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav className={"globalMenuSp" + " " + (isOpen ? "active" : "inactive")}>
				<div className="decotitle">筑駒文化祭2020 3AHR</div>
				<div className="decosubtitle">ー今から皆さんは観客ですー</div>
				<ul>
					<li><a href="/">Home</a></li>
					<li><a href="/About">About</a></li>
					<li><a href="/Story1">Story1</a></li>
					<li><a href="/Story2">Story2</a></li>
					<li><a href="/TimeTable">Time Table</a></li>
				</ul>
			</nav>
			<div className="title"><span>{props.name}</span>
			</div>
		</header>
	);
}
export default Header;