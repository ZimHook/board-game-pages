// Automatically generated with Reach 0.1.6 (a1d29a4b)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (a1d29a4b)';
export const _backendVersion = 5;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      4: [ctc0, ctc1, ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v129 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v129],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:32:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v129, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v134], secs: v136, time: v135, didSend: v27, from: v133 } = txn1;
      
      sim_r.txns.push({
        amt: v134,
        kind: 'to',
        tok: undefined
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v134], secs: v136, time: v135, didSend: v27, from: v133 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v143, time: v142, didSend: v36, from: v141 } = txn2;
  ;
  let v146 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  let v147 = stdlib.checkedBigNumberify('./index.rsh:41:32:decimal', stdlib.UInt_max, 0);
  let v148 = stdlib.checkedBigNumberify('./index.rsh:41:34:decimal', stdlib.UInt_max, 0);
  let v149 = v142;
  
  while ((() => {
    const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    
    return v164;})()) {
    const v167 = stdlib.protect(ctc0, await interact.getStep(v147, v148), {
      at: './index.rsh:47:52:application',
      fs: ['at ./index.rsh:46:15:application call to [unknown function] (defined at: ./index.rsh:46:19:function exp)'],
      msg: 'getStep',
      who: 'Alice'
      });
    const v168 = stdlib.add(v147, v167);
    stdlib.protect(ctc1, await interact.seePos(v168, v148, v167), {
      at: './index.rsh:48:26:application',
      fs: ['at ./index.rsh:46:15:application call to [unknown function] (defined at: ./index.rsh:46:19:function exp)'],
      msg: 'seePos',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v133, v134, v141, v147, v148, v167],
      evt_cnt: 1,
      funcNum: 3,
      lct: v149,
      onlyIf: true,
      out_tys: [ctc0],
      pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [v170], secs: v172, time: v171, didSend: v62, from: v169 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v174 = stdlib.addressEq(v133, v169);
        stdlib.assert(v174, {
          at: './index.rsh:50:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v175 = stdlib.add(v170, v147);
        const v176 = stdlib.ge(v175, stdlib.checkedBigNumberify('./index.rsh:51:26:decimal', stdlib.UInt_max, 25));
        if (v176) {
          const v177 = stdlib.add(v147, v170);
          const cv146 = stdlib.checkedBigNumberify('./index.rsh:52:50:decimal', stdlib.UInt_max, 2);
          const cv147 = v177;
          const cv148 = v148;
          const cv149 = v171;
          
          (() => {
            const v146 = cv146;
            const v147 = cv147;
            const v148 = cv148;
            const v149 = cv149;
            
            if ((() => {
              const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
              
              return v164;})()) {
              sim_r.isHalt = false;
              }
            else {
              const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
              const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
              const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
              const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
              const v204 = v201 ? v202 : v203;
              const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
              const v206 = v200 ? v205 : v204;
              const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
              const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
              const v209 = stdlib.mul(v207, v134);
              sim_r.txns.push({
                amt: v209,
                kind: 'from',
                to: v133,
                tok: undefined
                });
              const v214 = stdlib.mul(v208, v134);
              sim_r.txns.push({
                amt: v214,
                kind: 'from',
                to: v141,
                tok: undefined
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined
                })
              sim_r.isHalt = true;
              }})();}
        else {
          sim_r.isHalt = false;
          }
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [v170], secs: v172, time: v171, didSend: v62, from: v169 } = txn3;
    ;
    const v174 = stdlib.addressEq(v133, v169);
    stdlib.assert(v174, {
      at: './index.rsh:50:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v175 = stdlib.add(v170, v147);
    const v176 = stdlib.ge(v175, stdlib.checkedBigNumberify('./index.rsh:51:26:decimal', stdlib.UInt_max, 25));
    if (v176) {
      const v177 = stdlib.add(v147, v170);
      const cv146 = stdlib.checkedBigNumberify('./index.rsh:52:50:decimal', stdlib.UInt_max, 2);
      const cv147 = v177;
      const cv148 = v148;
      const cv149 = v171;
      
      v146 = cv146;
      v147 = cv147;
      v148 = cv148;
      v149 = cv149;
      
      continue;}
    else {
      const txn4 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v185], secs: v187, time: v186, didSend: v79, from: v184 } = txn4;
      ;
      const v189 = stdlib.addressEq(v141, v184);
      stdlib.assert(v189, {
        at: './index.rsh:61:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v190 = stdlib.add(v185, v148);
      const v191 = stdlib.ge(v190, stdlib.checkedBigNumberify('./index.rsh:62:26:decimal', stdlib.UInt_max, 25));
      if (v191) {
        const v192 = stdlib.add(v147, v170);
        const v193 = stdlib.add(v148, v185);
        const cv146 = stdlib.checkedBigNumberify('./index.rsh:63:56:decimal', stdlib.UInt_max, 0);
        const cv147 = v192;
        const cv148 = v193;
        const cv149 = v186;
        
        v146 = cv146;
        v147 = cv147;
        v148 = cv148;
        v149 = cv149;
        
        continue;}
      else {
        const v194 = stdlib.add(v147, v170);
        const v195 = stdlib.add(v148, v185);
        const v196 = stdlib.ge(v147, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
        const v197 = stdlib.ge(v148, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
        const v198 = v197 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
        const v199 = v196 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v198;
        const cv146 = v199;
        const cv147 = v194;
        const cv148 = v195;
        const cv149 = v186;
        
        v146 = cv146;
        v147 = cv147;
        v148 = cv148;
        v149 = cv149;
        
        continue;}
      
      }
    
    }
  const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
  const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
  const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
  const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
  const v204 = v201 ? v202 : v203;
  const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
  const v206 = v200 ? v205 : v204;
  const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
  const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
  const v209 = stdlib.mul(v207, v134);
  ;
  const v214 = stdlib.mul(v208, v134);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v146, v147, v148), {
    at: './index.rsh:81:26:application',
    fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined,
    waitIfNotPresent: false
    }));
  const {data: [v134], secs: v136, time: v135, didSend: v27, from: v133 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v134), {
    at: './index.rsh:36:27:application',
    fs: ['at ./index.rsh:35:11:application call to [unknown function] (defined at: ./index.rsh:35:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v133, v134],
    evt_cnt: 0,
    funcNum: 1,
    lct: v135,
    onlyIf: true,
    out_tys: [],
    pay: [v134, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v143, time: v142, didSend: v36, from: v141 } = txn2;
      
      sim_r.txns.push({
        amt: v134,
        kind: 'to',
        tok: undefined
        });
      const v146 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v147 = stdlib.checkedBigNumberify('./index.rsh:41:32:decimal', stdlib.UInt_max, 0);
      const v148 = stdlib.checkedBigNumberify('./index.rsh:41:34:decimal', stdlib.UInt_max, 0);
      const v149 = v142;
      
      if ((() => {
        const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v164;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
        const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
        const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
        const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
        const v204 = v201 ? v202 : v203;
        const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
        const v206 = v200 ? v205 : v204;
        const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
        const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
        const v209 = stdlib.mul(v207, v134);
        sim_r.txns.push({
          amt: v209,
          kind: 'from',
          to: v133,
          tok: undefined
          });
        const v214 = stdlib.mul(v208, v134);
        sim_r.txns.push({
          amt: v214,
          kind: 'from',
          to: v141,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v143, time: v142, didSend: v36, from: v141 } = txn2;
  ;
  let v146 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
  let v147 = stdlib.checkedBigNumberify('./index.rsh:41:32:decimal', stdlib.UInt_max, 0);
  let v148 = stdlib.checkedBigNumberify('./index.rsh:41:34:decimal', stdlib.UInt_max, 0);
  let v149 = v142;
  
  while ((() => {
    const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
    
    return v164;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc0],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [v170], secs: v172, time: v171, didSend: v62, from: v169 } = txn3;
    ;
    const v174 = stdlib.addressEq(v133, v169);
    stdlib.assert(v174, {
      at: './index.rsh:50:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const v175 = stdlib.add(v170, v147);
    const v176 = stdlib.ge(v175, stdlib.checkedBigNumberify('./index.rsh:51:26:decimal', stdlib.UInt_max, 25));
    if (v176) {
      const v177 = stdlib.add(v147, v170);
      const cv146 = stdlib.checkedBigNumberify('./index.rsh:52:50:decimal', stdlib.UInt_max, 2);
      const cv147 = v177;
      const cv148 = v148;
      const cv149 = v171;
      
      v146 = cv146;
      v147 = cv147;
      v148 = cv148;
      v149 = cv149;
      
      continue;}
    else {
      const v180 = stdlib.add(v147, v170);
      const v181 = stdlib.protect(ctc0, await interact.getStep(v148, v180), {
        at: './index.rsh:58:52:application',
        fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
        msg: 'getStep',
        who: 'Bob'
        });
      const v182 = stdlib.add(v148, v181);
      stdlib.protect(ctc1, await interact.seePos(v182, v180, v181), {
        at: './index.rsh:59:26:application',
        fs: ['at ./index.rsh:57:15:application call to [unknown function] (defined at: ./index.rsh:57:19:function exp)'],
        msg: 'seePos',
        who: 'Bob'
        });
      
      const txn4 = await (ctc.sendrecv({
        args: [v133, v134, v141, v147, v148, v170, v181],
        evt_cnt: 1,
        funcNum: 4,
        lct: v171,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn4) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v185], secs: v187, time: v186, didSend: v79, from: v184 } = txn4;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v189 = stdlib.addressEq(v141, v184);
          stdlib.assert(v189, {
            at: './index.rsh:61:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v190 = stdlib.add(v185, v148);
          const v191 = stdlib.ge(v190, stdlib.checkedBigNumberify('./index.rsh:62:26:decimal', stdlib.UInt_max, 25));
          if (v191) {
            const v193 = stdlib.add(v148, v185);
            const cv146 = stdlib.checkedBigNumberify('./index.rsh:63:56:decimal', stdlib.UInt_max, 0);
            const cv147 = v180;
            const cv148 = v193;
            const cv149 = v186;
            
            (() => {
              const v146 = cv146;
              const v147 = cv147;
              const v148 = cv148;
              const v149 = cv149;
              
              if ((() => {
                const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v164;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
                const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
                const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
                const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
                const v204 = v201 ? v202 : v203;
                const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
                const v206 = v200 ? v205 : v204;
                const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
                const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
                const v209 = stdlib.mul(v207, v134);
                sim_r.txns.push({
                  amt: v209,
                  kind: 'from',
                  to: v133,
                  tok: undefined
                  });
                const v214 = stdlib.mul(v208, v134);
                sim_r.txns.push({
                  amt: v214,
                  kind: 'from',
                  to: v141,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();}
          else {
            const v195 = stdlib.add(v148, v185);
            const v196 = stdlib.ge(v147, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
            const v197 = stdlib.ge(v148, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
            const v198 = v197 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
            const v199 = v196 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v198;
            const cv146 = v199;
            const cv147 = v180;
            const cv148 = v195;
            const cv149 = v186;
            
            (() => {
              const v146 = cv146;
              const v147 = cv147;
              const v148 = cv148;
              const v149 = cv149;
              
              if ((() => {
                const v164 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v164;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
                const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
                const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
                const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
                const v204 = v201 ? v202 : v203;
                const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
                const v206 = v200 ? v205 : v204;
                const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
                const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
                const v209 = stdlib.mul(v207, v134);
                sim_r.txns.push({
                  amt: v209,
                  kind: 'from',
                  to: v133,
                  tok: undefined
                  });
                const v214 = stdlib.mul(v208, v134);
                sim_r.txns.push({
                  amt: v214,
                  kind: 'from',
                  to: v141,
                  tok: undefined
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined
                  })
                sim_r.isHalt = true;
                }})();}
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined,
        tys: [ctc2, ctc0, ctc2, ctc0, ctc0, ctc0, ctc0],
        waitIfNotPresent: false
        }));
      const {data: [v185], secs: v187, time: v186, didSend: v79, from: v184 } = txn4;
      ;
      const v189 = stdlib.addressEq(v141, v184);
      stdlib.assert(v189, {
        at: './index.rsh:61:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v190 = stdlib.add(v185, v148);
      const v191 = stdlib.ge(v190, stdlib.checkedBigNumberify('./index.rsh:62:26:decimal', stdlib.UInt_max, 25));
      if (v191) {
        const v193 = stdlib.add(v148, v185);
        const cv146 = stdlib.checkedBigNumberify('./index.rsh:63:56:decimal', stdlib.UInt_max, 0);
        const cv147 = v180;
        const cv148 = v193;
        const cv149 = v186;
        
        v146 = cv146;
        v147 = cv147;
        v148 = cv148;
        v149 = cv149;
        
        continue;}
      else {
        const v195 = stdlib.add(v148, v185);
        const v196 = stdlib.ge(v147, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
        const v197 = stdlib.ge(v148, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
        const v198 = v197 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
        const v199 = v196 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v198;
        const cv146 = v199;
        const cv147 = v180;
        const cv148 = v195;
        const cv149 = v186;
        
        v146 = cv146;
        v147 = cv147;
        v148 = cv148;
        v149 = cv149;
        
        continue;}
      
      }
    
    }
  const v200 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:73:24:decimal', stdlib.UInt_max, 2));
  const v201 = stdlib.eq(v146, stdlib.checkedBigNumberify('./index.rsh:74:24:decimal', stdlib.UInt_max, 0));
  const v202 = [stdlib.checkedBigNumberify('./index.rsh:74:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:74:32:decimal', stdlib.UInt_max, 2)];
  const v203 = [stdlib.checkedBigNumberify('./index.rsh:75:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:75:17:decimal', stdlib.UInt_max, 1)];
  const v204 = v201 ? v202 : v203;
  const v205 = [stdlib.checkedBigNumberify('./index.rsh:73:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:73:32:decimal', stdlib.UInt_max, 0)];
  const v206 = v200 ? v205 : v204;
  const v207 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 0)];
  const v208 = v206[stdlib.checkedBigNumberify('./index.rsh:72:11:array', stdlib.UInt_max, 1)];
  const v209 = stdlib.mul(v207, v134);
  ;
  const v214 = stdlib.mul(v208, v134);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v146, v147, v148), {
    at: './index.rsh:81:26:application',
    fs: ['at ./index.rsh:80:9:application call to [unknown function] (defined at: ./index.rsh:80:21:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  appApproval: `#pragma version 5
txn RekeyTo
global ZeroAddress
==
assert
txn Lease
global ZeroAddress
==
assert
int 0
store 0
txn ApplicationID
bz alloc
byte base64()
app_global_get
dup
int 0
extract_uint64
store 1
dup
int 8
extract_uint64
store 2
extract 16 32
store 3
txn NumAppArgs
int 3
==
assert
txna ApplicationArgs 0
btoi
preamble:
// Handler 0
dup
int 0
==
bz l0_afterHandler0
pop
// check step
int 0
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
byte base64()
pop
txna ApplicationArgs 2
dup
len
int 40
==
assert
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txn Sender
global CreatorAddress
==
assert
load 255
store 3
// "CheckPay"
// "./index.rsh:32:7:dot"
// "[]"
int 100000
dup
bz l1_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l1_checkTxnK:
pop
// "CheckPay"
// "./index.rsh:32:7:dot"
// "[]"
load 254
dup
bz l2_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l2_checkTxnK:
pop
txn Sender
load 254
itob
concat
int 1
bzero
dig 1
extract 0 40
app_global_put
pop
int 1
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l0_afterHandler0:
// Handler 1
dup
int 1
==
bz l3_afterHandler1
pop
// check step
int 1
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
// "CheckPay"
// "./index.rsh:38:7:dot"
// "[]"
load 254
dup
bz l4_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Receiver
==
assert
l4_checkTxnK:
pop
load 255
load 254
itob
concat
txn Sender
concat
byte base64(AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAA)
global Round
itob
concat
b loopBody2
l3_afterHandler1:
l5_afterHandler2:
// Handler 3
dup
int 3
==
bz l6_afterHandler3
pop
// check step
int 4
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 250
pop
// "CheckPay"
// "./index.rsh:50:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:50:11:dot"
// "[]"
load 255
txn Sender
==
assert
load 250
load 252
+
int 25
>=
bz l7_ifF
load 255
load 254
itob
concat
load 253
concat
byte base64(AAAAAAAAAAI=)
load 252
load 250
+
itob
concat
load 251
itob
concat
global Round
itob
concat
b loopBody2
l7_ifF:
load 255
load 254
itob
concat
load 253
concat
load 252
itob
concat
load 251
itob
concat
load 250
itob
concat
int 1
bzero
dig 1
extract 0 96
app_global_put
pop
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l6_afterHandler3:
// Handler 4
dup
int 4
==
bz l8_afterHandler4
pop
// check step
int 5
load 1
==
assert
// check time
txna ApplicationArgs 1
btoi
dup
int 0
==
swap
load 2
==
||
assert
int 1
bzero
app_global_get
dup
extract 0 32
store 255
dup
int 32
extract_uint64
store 254
dup
extract 40 32
store 253
dup
int 72
extract_uint64
store 252
dup
int 80
extract_uint64
store 251
dup
int 88
extract_uint64
store 250
pop
txna ApplicationArgs 2
dup
len
int 8
==
assert
dup
btoi
store 249
pop
// "CheckPay"
// "./index.rsh:61:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:61:11:dot"
// "[]"
load 253
txn Sender
==
assert
load 249
load 251
+
int 25
>=
bz l9_ifF
load 255
load 254
itob
concat
load 253
concat
int 8
bzero
load 252
load 250
+
itob
concat
load 251
load 249
+
itob
concat
global Round
itob
concat
b loopBody2
l9_ifF:
load 255
load 254
itob
concat
load 253
concat
int 1
int 0
load 251
int 25
>=
select
int 2
load 252
int 25
>=
select
itob
load 252
load 250
+
itob
concat
load 251
load 249
+
itob
concat
global Round
itob
concat
b loopBody2
l8_afterHandler4:
int 0
assert
loopBody2:
dup
int 0
extract_uint64
store 255
dup
int 8
extract_uint64
store 254
dup
int 16
extract_uint64
store 253
dup
int 24
extract_uint64
store 252
pop
dup
extract 0 32
store 251
dup
int 32
extract_uint64
store 250
dup
extract 40 32
store 249
pop
load 255
int 1
==
bz l10_ifF
load 251
load 250
itob
concat
load 249
concat
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 88
app_global_put
pop
int 4
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l10_ifF:
byte base64(AAAAAAAAAAEAAAAAAAAAAQ==)
byte base64(AAAAAAAAAAAAAAAAAAAAAg==)
load 255
int 0
==
select
byte base64(AAAAAAAAAAIAAAAAAAAAAA==)
load 255
int 2
==
select
dup
store 248
int 0
extract_uint64
load 250
*
dup
bz l11_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 251
dig 1
gtxns Receiver
==
assert
l11_checkTxnK:
pop
load 248
int 8
extract_uint64
load 250
*
dup
bz l12_checkTxnK
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
load 249
dig 1
gtxns Receiver
==
assert
l12_checkTxnK:
pop
int 0
load 0
dup
int 1
+
store 0
swap
dig 1
gtxns Amount
==
assert
int pay
dig 1
gtxns TypeEnum
==
assert
int 0
dig 1
gtxns Fee
==
assert
global ZeroAddress
dig 1
gtxns Lease
==
assert
global ZeroAddress
dig 1
gtxns RekeyTo
==
assert
load 3
dig 1
gtxns Sender
==
assert
global CreatorAddress
dig 1
gtxns CloseRemainderTo
==
assert
l13_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
updateState:
byte base64()
load 1
itob
load 2
itob
load 3
concat
concat
app_global_put
checkSize:
load 0
dup
dup
int 1
+
global GroupSize
==
assert
txn GroupIndex
==
assert
int 1000
*
txn Fee
<=
assert
done:
int 1
return
alloc:
txn OnCompletion
int NoOp
==
assert
int 0
store 1
int 0
store 2
global ZeroAddress
store 3
b updateState
`,
  appClear: `#pragma version 5
int 0
`,
  escrow: `#pragma version 5
global GroupSize
int 1
-
dup
gtxns TypeEnum
int appl
==
assert
gtxns ApplicationID
int {{ApplicationID}}
==
assert
done:
int 1
`,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
  unsupported: [],
  version: 5
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v134",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v170",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v185",
                "type": "uint256"
              }
            ],
            "internalType": "struct T13",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T14",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620011c1380380620011c18339810160408190526200002691620001b7565b6000805543600355604080518251815260208084015151908201527fcbe8b01c100825cba852556e4d2f014b5e636208419a4c3d83f7ef63111ab885910160405180910390a1602081015151620000819034146007620000e7565b604080518082018252600060208083018281523380855286830151518252600193849055439093558451808301939093525182850152835180830385018152606090920190935280519192620000de926002929091019062000111565b50505062000296565b816200010d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200011f9062000259565b90600052602060002090601f0160209004810192826200014357600085556200018e565b82601f106200015e57805160ff19168380011785556200018e565b828001600101855582156200018e579182015b828111156200018e57825182559160200191906001019062000171565b506200019c929150620001a0565b5090565b5b808211156200019c5760008155600101620001a1565b6000818303604080821215620001cc57600080fd5b80518082016001600160401b038082118383101715620001fc57634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200021657600080fd5b8351945060208501915084821081831117156200024357634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c908216806200026e57607f821691505b602082108114156200029057634e487b7160e01b600052602260045260246000fd5b50919050565b610f1b80620002a66000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f5780631edb3427146100835780637963168e1461009657806383230757146100a9578063ab53f2c6146100be578063cee12280146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610c1a565b6100f4565b61005d6100a4366004610c1a565b6103c2565b3480156100b557600080fd5b50600154610070565b3480156100ca57600080fd5b506100d3610532565b60405161007a929190610c3d565b61005d6100ef366004610c1a565b6105cf565b610104600460005414600d610820565b61011e8135158061011757506001548235145b600e610820565b60008080556002805461013090610c9a565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610c9a565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610ceb565b6040805184358152602080860135908201529192507fa9113ca7be129dbfc8a7f27e8f0a5587942d1c3764a5034cfdb35715a0280686910160405180910390a161020d3415600b610820565b8051610225906001600160a01b03163314600c610820565b606081015160199061023b906020850135610d8b565b106102bd57610248610a4f565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528082015160029052606083015161028e9185013590610d8b565b6020808301805190910191909152608083015181516040015251436060909101526102b881610845565b505050565b6103086040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b019081528c88013560a0808d019182526005600055436001558751998a019a909a52965195880195909552925190971690850152945194830194909452925191810191909152905160c082015260e0015b604051602081830303815290604052600290805190602001906103bb929190610aa8565b50505b5050565b6103d26001600054146009610820565b6103ec813515806103e557506001548235145b600a610820565b6000808055600280546103fe90610c9a565b80601f016020809104026020016040519081016040528092919081815260200182805461042a90610c9a565b80156104775780601f1061044c57610100808354040283529160200191610477565b820191906000526020600020905b81548152906001019060200180831161045a57829003601f168201915b505050505080602001905181019061048f9190610da3565b90507f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d826040516104c09190610e08565b60405180910390a16104d9816020015134146008610820565b6104e1610a4f565b815181516001600160a01b039091169052602080830151825182015281513360409182015281830180516001905280516000930183905280519091019190915251436060909101526102b881610845565b60006060600054600280805461054790610c9a565b80601f016020809104026020016040519081016040528092919081815260200182805461057390610c9a565b80156105c05780601f10610595576101008083540402835291602001916105c0565b820191906000526020600020905b8154815290600101906020018083116105a357829003601f168201915b50505050509050915091509091565b6105df6005600054146011610820565b6105f9813515806105f257506001548235145b6012610820565b60008080556002805461060b90610c9a565b80601f016020809104026020016040519081016040528092919081815260200182805461063790610c9a565b80156106845780601f1061065957610100808354040283529160200191610684565b820191906000526020600020905b81548152906001019060200180831161066757829003601f168201915b505050505080602001905181019061069c9190610e32565b6040805184358152602080860135908201529192507fb5f68330967194c85eebaf8de848d0571722cf52211ff80fb1ea5c866248c2aa910160405180910390a16106e83415600f610820565b6040810151610703906001600160a01b031633146010610820565b6080810151601990610719906020850135610d8b565b106107a957610726610a4f565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101516000905260a0820151606083015161076d9190610d8b565b602080830151810191909152608083015161078b9185013590610d8b565b6020820180516040019190915251436060909101526102b881610845565b6107b1610a4f565b815181516001600160a01b03918216905260208084015183519091015260408084015183519216910152606082015160191115610803576019826080015110156107fc576001610806565b6000610806565b60025b60208201515260a0820151606083015161076d9190610d8b565b816103be5760405163100960cb60e01b81526004810182905260240160405180910390fd5b61084d610b2c565b6020820151516001141561092a5761089f6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b0390811680835284516020908101518185019081528651604090810151851681870190815283890180518501516060808a0191825291518401516080808b01918252600460005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c001610397565b805160009081905281516002602091820181905281840180516001908190529051830152604084018051829052518201929092528301515114610983576020820151511561097c578060200151610989565b8051610989565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc916109b69190610ec6565b6040518115909202916000818181858888f193505050501580156109de573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc836000015160200151836060015160200151610a109190610ec6565b6040518115909202916000818181858888f19350505050158015610a38573d6000803e3d6000fd5b50600080805560018190556103be90600290610bb0565b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610aa36040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b828054610ab490610c9a565b90600052602060002090601f016020900481019282610ad65760008555610b1c565b82601f10610aef57805160ff1916838001178555610b1c565b82800160010185558215610b1c579182015b82811115610b1c578251825591602001919060010190610b01565b50610b28929150610bed565b5090565b6040805160c0810190915260006080820181815260a083019190915281908152602001610b6c604051806040016040528060008152602001600081525090565b8152602001610b8e604051806040016040528060008152602001600081525090565b8152602001610aa3604051806040016040528060008152602001600081525090565b508054610bbc90610c9a565b6000825580601f10610bcc575050565b601f016020900490600052602060002090810190610bea9190610bed565b50565b5b80821115610b285760008155600101610bee565b600060408284031215610c1457600080fd5b50919050565b600060408284031215610c2c57600080fd5b610c368383610c02565b9392505050565b82815260006020604081840152835180604085015260005b81811015610c7157858101830151858201606001528201610c55565b81811115610c83576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610cae57607f821691505b60208210811415610c1457634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ce657600080fd5b919050565b600060a08284031215610cfd57600080fd5b60405160a0810181811067ffffffffffffffff82111715610d2e57634e487b7160e01b600052604160045260246000fd5b604052610d3a83610ccf565b815260208301516020820152610d5260408401610ccf565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610d9e57610d9e610d75565b500190565b600060408284031215610db557600080fd5b6040516040810181811067ffffffffffffffff82111715610de657634e487b7160e01b600052604160045260246000fd5b604052610df283610ccf565b8152602083015160208201528091505092915050565b81358152604081016020830135801515808214610e2457600080fd5b806020850152505092915050565b600060c08284031215610e4457600080fd5b60405160c0810181811067ffffffffffffffff82111715610e7557634e487b7160e01b600052604160045260246000fd5b604052610e8183610ccf565b815260208301516020820152610e9960408401610ccf565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b6000816000190483118215151615610ee057610ee0610d75565b50029056fea264697066735822122001fb6d1c92a7ddc820009b9046ffc5f9364a9c41574f47267e008d72a554d79f64736f6c63430008090033`,
  BytecodeLen: 4545,
  Which: `oD`,
  version: 5,
  views: {
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
