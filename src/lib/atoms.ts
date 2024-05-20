import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils'

//log in 
export const logedIn = atomWithStorage("logedIn" ,false);


// html course results
export const sHtmlBAtom = atomWithStorage("sHtmlBAtom",0);
export const sHtmlCAtom = atomWithStorage("sHtmlCAtom", 0);
export const sHtmlEAtom = atomWithStorage("sHtmlEAtom", 0);
export const sHtmlLAtom = atomWithStorage("sHtmlLAtom", 0);
export const htmlP = atomWithStorage("htmlP", 0);

// css course results
export const sCssBAtom = atomWithStorage("sCssBAtom",100);
export const sCssSAtom = atomWithStorage("sCssSAtom", 100);
export const sCssPAtom = atomWithStorage("sCssPAtom", 100);
export const sCssTAtom = atomWithStorage("sCssTAtom", 100);
export const cssP = atomWithStorage("cssP",0);

// continue buttons
export const hstart1 = atomWithStorage("start1", "Start");
export const hstart2 = atomWithStorage("start2", "Start");
export const hstart3 = atomWithStorage("start3", "Start");
export const hstart4 = atomWithStorage("start4", "Start");
export const hstart5 = atomWithStorage("start5", "Start");
export const hstart6 = atomWithStorage("start6", "Start");
export const hstart7 = atomWithStorage("start7", "Start");
export const hstart8 = atomWithStorage("start8", "Start");

// temporary database
export const name = atomWithStorage("name", "");
export const surname = atomWithStorage("surname", "");
export const avatar = atomWithStorage("avatar", "avatar1");