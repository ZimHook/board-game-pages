// Automatically generated with Reach 0.1.6 (639fa565)
/* eslint-disable */
export const _version = '0.1.6';
export const _versionHash = '0.1.6 (639fa565)';
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
      1: [ctc0, ctc1, ctc1],
      5: [ctc0, ctc1, ctc0, ctc1, ctc1],
      6: [ctc0, ctc1, ctc0, ctc1, ctc1, ctc1]
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
  
  
  const v155 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v155],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:37:7:dot', stdlib.UInt_max, 0),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v155, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [v160], secs: v162, time: v161, didSend: v27, from: v159 } = txn1;
      
      sim_r.txns.push({
        amt: v160,
        kind: 'to',
        tok: undefined
        });
      const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, 10));
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v160], secs: v162, time: v161, didSend: v27, from: v159 } = txn1;
  ;
  const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, 10));
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v166],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v159, v160, v166],
      evt_cnt: 0,
      funcNum: 2,
      lct: v161,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
        
        const {data: [], secs: v256, time: v255, didSend: v129, from: v254 } = txn3;
        
        sim_r.txns.push({
          amt: stdlib.checkedBigNumberify('reach standard library:decimal', stdlib.UInt_max, 0),
          kind: 'to',
          tok: undefined
          });
        const v258 = stdlib.addressEq(v159, v254);
        stdlib.assert(v258, {
          at: 'reach standard library:206:7:dot',
          fs: ['at ./index.rsh:43:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        sim_r.txns.push({
          amt: v160,
          kind: 'from',
          to: v159,
          tok: undefined
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined,
      tys: [ctc2, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v256, time: v255, didSend: v129, from: v254 } = txn3;
    ;
    const v258 = stdlib.addressEq(v159, v254);
    stdlib.assert(v258, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:43:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Alice'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:32:27:application',
      fs: ['at ./index.rsh:31:11:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:30:30:function exp)', 'at ./index.rsh:43:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v172, time: v171, didSend: v36, from: v170 } = txn2;
    ;
    let v175 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v176 = stdlib.checkedBigNumberify('./index.rsh:46:32:decimal', stdlib.UInt_max, 0);
    let v177 = stdlib.checkedBigNumberify('./index.rsh:46:34:decimal', stdlib.UInt_max, 0);
    let v178 = v171;
    
    while ((() => {
      const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v193;})()) {
      const v196 = stdlib.protect(ctc0, await interact.getStep(v176, v177), {
        at: './index.rsh:52:52:application',
        fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)'],
        msg: 'getStep',
        who: 'Alice'
        });
      const v197 = stdlib.add(v176, v196);
      stdlib.protect(ctc1, await interact.seePos(v197, v177, v196), {
        at: './index.rsh:53:26:application',
        fs: ['at ./index.rsh:51:15:application call to [unknown function] (defined at: ./index.rsh:51:19:function exp)'],
        msg: 'seePos',
        who: 'Alice'
        });
      
      const txn3 = await (ctc.sendrecv({
        args: [v159, v160, v170, v176, v177, v196],
        evt_cnt: 1,
        funcNum: 4,
        lct: v178,
        onlyIf: true,
        out_tys: [ctc0],
        pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
          
          const {data: [v199], secs: v201, time: v200, didSend: v62, from: v198 } = txn3;
          
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
            kind: 'to',
            tok: undefined
            });
          const v203 = stdlib.addressEq(v159, v198);
          stdlib.assert(v203, {
            at: './index.rsh:55:11:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v204 = stdlib.add(v199, v176);
          const v205 = stdlib.ge(v204, stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, 25));
          if (v205) {
            const v206 = stdlib.add(v176, v199);
            const cv175 = stdlib.checkedBigNumberify('./index.rsh:57:50:decimal', stdlib.UInt_max, 2);
            const cv176 = v206;
            const cv177 = v177;
            const cv178 = v200;
            
            (() => {
              const v175 = cv175;
              const v176 = cv176;
              const v177 = cv177;
              const v178 = cv178;
              
              if ((() => {
                const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                
                return v193;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
                const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
                const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
                const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
                const v233 = v230 ? v231 : v232;
                const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
                const v235 = v229 ? v234 : v233;
                const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
                const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
                const v238 = stdlib.mul(v236, v160);
                sim_r.txns.push({
                  amt: v238,
                  kind: 'from',
                  to: v159,
                  tok: undefined
                  });
                const v243 = stdlib.mul(v237, v160);
                sim_r.txns.push({
                  amt: v243,
                  kind: 'from',
                  to: v170,
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
      const {data: [v199], secs: v201, time: v200, didSend: v62, from: v198 } = txn3;
      ;
      const v203 = stdlib.addressEq(v159, v198);
      stdlib.assert(v203, {
        at: './index.rsh:55:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Alice'
        });
      const v204 = stdlib.add(v199, v176);
      const v205 = stdlib.ge(v204, stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, 25));
      if (v205) {
        const v206 = stdlib.add(v176, v199);
        const cv175 = stdlib.checkedBigNumberify('./index.rsh:57:50:decimal', stdlib.UInt_max, 2);
        const cv176 = v206;
        const cv177 = v177;
        const cv178 = v200;
        
        v175 = cv175;
        v176 = cv176;
        v177 = cv177;
        v178 = cv178;
        
        continue;}
      else {
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 5,
          out_tys: [ctc0],
          timeoutAt: undefined,
          waitIfNotPresent: false
          }));
        const {data: [v214], secs: v216, time: v215, didSend: v79, from: v213 } = txn4;
        ;
        const v218 = stdlib.addressEq(v170, v213);
        stdlib.assert(v218, {
          at: './index.rsh:66:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v219 = stdlib.add(v214, v177);
        const v220 = stdlib.ge(v219, stdlib.checkedBigNumberify('./index.rsh:67:26:decimal', stdlib.UInt_max, 25));
        if (v220) {
          const v221 = stdlib.add(v176, v199);
          const v222 = stdlib.add(v177, v214);
          const cv175 = stdlib.checkedBigNumberify('./index.rsh:68:56:decimal', stdlib.UInt_max, 0);
          const cv176 = v221;
          const cv177 = v222;
          const cv178 = v215;
          
          v175 = cv175;
          v176 = cv176;
          v177 = cv177;
          v178 = cv178;
          
          continue;}
        else {
          const v223 = stdlib.add(v176, v199);
          const v224 = stdlib.add(v177, v214);
          const v225 = stdlib.ge(v176, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
          const v226 = stdlib.ge(v177, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
          const v227 = v226 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v227;
          const cv175 = v228;
          const cv176 = v223;
          const cv177 = v224;
          const cv178 = v215;
          
          v175 = cv175;
          v176 = cv176;
          v177 = cv177;
          v178 = cv178;
          
          continue;}
        
        }
      
      }
    const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
    const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
    const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
    const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
    const v233 = v230 ? v231 : v232;
    const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
    const v235 = v229 ? v234 : v233;
    const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
    const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
    const v238 = stdlib.mul(v236, v160);
    ;
    const v243 = stdlib.mul(v237, v160);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v175, v176, v177), {
      at: './index.rsh:86:26:application',
      fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
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
  const {data: [v160], secs: v162, time: v161, didSend: v27, from: v159 } = txn1;
  ;
  const v166 = stdlib.add(v161, stdlib.checkedBigNumberify('./index.rsh:24:18:decimal', stdlib.UInt_max, 10));
  stdlib.protect(ctc1, await interact.acceptWager(v160), {
    at: './index.rsh:41:27:application',
    fs: ['at ./index.rsh:40:11:application call to [unknown function] (defined at: ./index.rsh:40:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v159, v160, v166],
    evt_cnt: 0,
    funcNum: 1,
    lct: v161,
    onlyIf: true,
    out_tys: [],
    pay: [v160, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
      
      const {data: [], secs: v172, time: v171, didSend: v36, from: v170 } = txn2;
      
      sim_r.txns.push({
        amt: v160,
        kind: 'to',
        tok: undefined
        });
      const v175 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
      const v176 = stdlib.checkedBigNumberify('./index.rsh:46:32:decimal', stdlib.UInt_max, 0);
      const v177 = stdlib.checkedBigNumberify('./index.rsh:46:34:decimal', stdlib.UInt_max, 0);
      const v178 = v171;
      
      if ((() => {
        const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
        
        return v193;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
        const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
        const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
        const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
        const v233 = v230 ? v231 : v232;
        const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
        const v235 = v229 ? v234 : v233;
        const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
        const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
        const v238 = stdlib.mul(v236, v160);
        sim_r.txns.push({
          amt: v238,
          kind: 'from',
          to: v159,
          tok: undefined
          });
        const v243 = stdlib.mul(v237, v160);
        sim_r.txns.push({
          amt: v243,
          kind: 'from',
          to: v170,
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
    timeoutAt: ['time', v166],
    tys: [ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 0,
      funcNum: 2,
      out_tys: [],
      timeoutAt: undefined,
      waitIfNotPresent: false
      }));
    const {data: [], secs: v256, time: v255, didSend: v129, from: v254 } = txn3;
    ;
    const v258 = stdlib.addressEq(v159, v254);
    stdlib.assert(v258, {
      at: 'reach standard library:206:7:dot',
      fs: ['at ./index.rsh:43:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'sender correct',
      who: 'Bob'
      });
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:32:27:application',
      fs: ['at ./index.rsh:31:11:application call to [unknown function] (defined at: ./index.rsh:31:23:function exp)', 'at reach standard library:209:8:application call to "after" (defined at: ./index.rsh:30:30:function exp)', 'at ./index.rsh:43:49:application call to "closeTo" (defined at: reach standard library:204:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v172, time: v171, didSend: v36, from: v170 } = txn2;
    ;
    let v175 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1);
    let v176 = stdlib.checkedBigNumberify('./index.rsh:46:32:decimal', stdlib.UInt_max, 0);
    let v177 = stdlib.checkedBigNumberify('./index.rsh:46:34:decimal', stdlib.UInt_max, 0);
    let v178 = v171;
    
    while ((() => {
      const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
      
      return v193;})()) {
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc0],
        timeoutAt: undefined,
        waitIfNotPresent: false
        }));
      const {data: [v199], secs: v201, time: v200, didSend: v62, from: v198 } = txn3;
      ;
      const v203 = stdlib.addressEq(v159, v198);
      stdlib.assert(v203, {
        at: './index.rsh:55:11:dot',
        fs: [],
        msg: 'sender correct',
        who: 'Bob'
        });
      const v204 = stdlib.add(v199, v176);
      const v205 = stdlib.ge(v204, stdlib.checkedBigNumberify('./index.rsh:56:26:decimal', stdlib.UInt_max, 25));
      if (v205) {
        const v206 = stdlib.add(v176, v199);
        const cv175 = stdlib.checkedBigNumberify('./index.rsh:57:50:decimal', stdlib.UInt_max, 2);
        const cv176 = v206;
        const cv177 = v177;
        const cv178 = v200;
        
        v175 = cv175;
        v176 = cv176;
        v177 = cv177;
        v178 = cv178;
        
        continue;}
      else {
        const v209 = stdlib.add(v176, v199);
        const v210 = stdlib.protect(ctc0, await interact.getStep(v177, v209), {
          at: './index.rsh:63:52:application',
          fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'getStep',
          who: 'Bob'
          });
        const v211 = stdlib.add(v177, v210);
        stdlib.protect(ctc1, await interact.seePos(v211, v209, v210), {
          at: './index.rsh:64:26:application',
          fs: ['at ./index.rsh:62:15:application call to [unknown function] (defined at: ./index.rsh:62:19:function exp)'],
          msg: 'seePos',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v159, v160, v170, v176, v177, v199, v210],
          evt_cnt: 1,
          funcNum: 5,
          lct: v200,
          onlyIf: true,
          out_tys: [ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], mapsPrev: [], mapsNext: [] };
            
            const {data: [v214], secs: v216, time: v215, didSend: v79, from: v213 } = txn4;
            
            sim_r.txns.push({
              amt: stdlib.checkedBigNumberify('./index.rsh:decimal', stdlib.UInt_max, 0),
              kind: 'to',
              tok: undefined
              });
            const v218 = stdlib.addressEq(v170, v213);
            stdlib.assert(v218, {
              at: './index.rsh:66:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v219 = stdlib.add(v214, v177);
            const v220 = stdlib.ge(v219, stdlib.checkedBigNumberify('./index.rsh:67:26:decimal', stdlib.UInt_max, 25));
            if (v220) {
              const v222 = stdlib.add(v177, v214);
              const cv175 = stdlib.checkedBigNumberify('./index.rsh:68:56:decimal', stdlib.UInt_max, 0);
              const cv176 = v209;
              const cv177 = v222;
              const cv178 = v215;
              
              (() => {
                const v175 = cv175;
                const v176 = cv176;
                const v177 = cv177;
                const v178 = cv178;
                
                if ((() => {
                  const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v193;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
                  const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
                  const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
                  const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
                  const v233 = v230 ? v231 : v232;
                  const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
                  const v235 = v229 ? v234 : v233;
                  const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
                  const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
                  const v238 = stdlib.mul(v236, v160);
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v159,
                    tok: undefined
                    });
                  const v243 = stdlib.mul(v237, v160);
                  sim_r.txns.push({
                    amt: v243,
                    kind: 'from',
                    to: v170,
                    tok: undefined
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined
                    })
                  sim_r.isHalt = true;
                  }})();}
            else {
              const v224 = stdlib.add(v177, v214);
              const v225 = stdlib.ge(v176, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
              const v226 = stdlib.ge(v177, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
              const v227 = v226 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
              const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v227;
              const cv175 = v228;
              const cv176 = v209;
              const cv177 = v224;
              const cv178 = v215;
              
              (() => {
                const v175 = cv175;
                const v176 = cv176;
                const v177 = cv177;
                const v178 = cv178;
                
                if ((() => {
                  const v193 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, 1));
                  
                  return v193;})()) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
                  const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
                  const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
                  const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
                  const v233 = v230 ? v231 : v232;
                  const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
                  const v235 = v229 ? v234 : v233;
                  const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
                  const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
                  const v238 = stdlib.mul(v236, v160);
                  sim_r.txns.push({
                    amt: v238,
                    kind: 'from',
                    to: v159,
                    tok: undefined
                    });
                  const v243 = stdlib.mul(v237, v160);
                  sim_r.txns.push({
                    amt: v243,
                    kind: 'from',
                    to: v170,
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
        const {data: [v214], secs: v216, time: v215, didSend: v79, from: v213 } = txn4;
        ;
        const v218 = stdlib.addressEq(v170, v213);
        stdlib.assert(v218, {
          at: './index.rsh:66:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v219 = stdlib.add(v214, v177);
        const v220 = stdlib.ge(v219, stdlib.checkedBigNumberify('./index.rsh:67:26:decimal', stdlib.UInt_max, 25));
        if (v220) {
          const v222 = stdlib.add(v177, v214);
          const cv175 = stdlib.checkedBigNumberify('./index.rsh:68:56:decimal', stdlib.UInt_max, 0);
          const cv176 = v209;
          const cv177 = v222;
          const cv178 = v215;
          
          v175 = cv175;
          v176 = cv176;
          v177 = cv177;
          v178 = cv178;
          
          continue;}
        else {
          const v224 = stdlib.add(v177, v214);
          const v225 = stdlib.ge(v176, stdlib.checkedBigNumberify('./index.rsh:5:16:decimal', stdlib.UInt_max, 25));
          const v226 = stdlib.ge(v177, stdlib.checkedBigNumberify('./index.rsh:5:33:decimal', stdlib.UInt_max, 25));
          const v227 = v226 ? stdlib.checkedBigNumberify('./index.rsh:5:38:decimal', stdlib.UInt_max, 0) : stdlib.checkedBigNumberify('./index.rsh:5:42:decimal', stdlib.UInt_max, 1);
          const v228 = v225 ? stdlib.checkedBigNumberify('./index.rsh:5:21:decimal', stdlib.UInt_max, 2) : v227;
          const cv175 = v228;
          const cv176 = v209;
          const cv177 = v224;
          const cv178 = v215;
          
          v175 = cv175;
          v176 = cv176;
          v177 = cv177;
          v178 = cv178;
          
          continue;}
        
        }
      
      }
    const v229 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:78:24:decimal', stdlib.UInt_max, 2));
    const v230 = stdlib.eq(v175, stdlib.checkedBigNumberify('./index.rsh:79:24:decimal', stdlib.UInt_max, 0));
    const v231 = [stdlib.checkedBigNumberify('./index.rsh:79:29:decimal', stdlib.UInt_max, 0), stdlib.checkedBigNumberify('./index.rsh:79:32:decimal', stdlib.UInt_max, 2)];
    const v232 = [stdlib.checkedBigNumberify('./index.rsh:80:14:decimal', stdlib.UInt_max, 1), stdlib.checkedBigNumberify('./index.rsh:80:17:decimal', stdlib.UInt_max, 1)];
    const v233 = v230 ? v231 : v232;
    const v234 = [stdlib.checkedBigNumberify('./index.rsh:78:29:decimal', stdlib.UInt_max, 2), stdlib.checkedBigNumberify('./index.rsh:78:32:decimal', stdlib.UInt_max, 0)];
    const v235 = v229 ? v234 : v233;
    const v236 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 0)];
    const v237 = v235[stdlib.checkedBigNumberify('./index.rsh:77:11:array', stdlib.UInt_max, 1)];
    const v238 = stdlib.mul(v236, v160);
    ;
    const v243 = stdlib.mul(v237, v160);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v175, v176, v177), {
      at: './index.rsh:86:26:application',
      fs: ['at ./index.rsh:85:9:application call to [unknown function] (defined at: ./index.rsh:85:21:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
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
// "./index.rsh:37:7:dot"
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
// "./index.rsh:37:7:dot"
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
global Round
int 10
+
store 253
txn Sender
load 254
itob
concat
load 253
itob
concat
int 1
bzero
dig 1
extract 0 48
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
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
<
assert
// "CheckPay"
// "./index.rsh:43:7:dot"
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
b loopBody3
l3_afterHandler1:
// Handler 2
dup
int 2
==
bz l5_afterHandler2
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
dup
int 40
extract_uint64
store 253
pop
txna ApplicationArgs 2
dup
len
int 0
==
assert
pop
global Round
load 253
>=
assert
// "CheckPay"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:43:49:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
// Just "sender correct"
// "reach standard library:206:7:dot"
// "[at ./index.rsh:43:49:application call to \"closeTo\" (defined at: reach standard library:204:8:function exp)]"
load 255
txn Sender
==
assert
load 254
dup
bz l6_checkTxnK
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
load 255
dig 1
gtxns Receiver
==
assert
l6_checkTxnK:
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
l7_checkTxnK:
pop
txn OnCompletion
int DeleteApplication
==
assert
b updateState
l5_afterHandler2:
l8_afterHandler3:
// Handler 4
dup
int 4
==
bz l9_afterHandler4
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
// "./index.rsh:55:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:55:11:dot"
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
bz l10_ifF
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
b loopBody3
l10_ifF:
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
int 6
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l9_afterHandler4:
// Handler 5
dup
int 5
==
bz l11_afterHandler5
pop
// check step
int 6
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
// "./index.rsh:66:11:dot"
// "[]"
// Just "sender correct"
// "./index.rsh:66:11:dot"
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
bz l12_ifF
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
b loopBody3
l12_ifF:
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
b loopBody3
l11_afterHandler5:
int 0
assert
loopBody3:
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
bz l13_ifF
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
int 5
store 1
global Round
store 2
txn OnCompletion
int NoOp
==
assert
b updateState
l13_ifF:
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
bz l14_checkTxnK
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
l14_checkTxnK:
pop
load 248
int 8
extract_uint64
load 250
*
dup
bz l15_checkTxnK
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
l15_checkTxnK:
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
l16_checkTxnK:
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
                "name": "v160",
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
                "name": "v160",
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
    "name": "e2",
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
                "name": "v199",
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
    "name": "e4",
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
                "name": "v214",
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
    "name": "e5",
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
    "name": "m2",
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
                "name": "v199",
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
    "name": "m4",
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
                "name": "v214",
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
    "name": "m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x6080604052604051620013de380380620013de8339810160408190526200002691620001ee565b60008080556040805160208101909152908152604080518351815260208085015151908201527fcbe8b01c100825cba852556e4d2f014b5e636208419a4c3d83f7ef63111ab885910160405180910390a16020820151516200008c90341460076200011e565b62000099600a4362000290565b8152604080516060808201835260006020808401828152848601838152338087528984015151835288518252600194859055439094558651928301939093525194810194909452519083015290608001604051602081830303815290604052600290805190602001906200010f92919062000148565b50504360035550620002f49050565b81620001445760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200015690620002b7565b90600052602060002090601f0160209004810192826200017a5760008555620001c5565b82601f106200019557805160ff1916838001178555620001c5565b82800160010185558215620001c5579182015b82811115620001c5578251825591602001919060010190620001a8565b50620001d3929150620001d7565b5090565b5b80821115620001d35760008155600101620001d8565b60008183036040808212156200020357600080fd5b80518082016001600160401b0380821183831017156200023357634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156200024d57600080fd5b8351945060208501915084821081831117156200027a57634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b60008219821115620002b257634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002cc57607f821691505b60208210811415620002ee57634e487b7160e01b600052602260045260246000fd5b50919050565b6110da80620003046000396000f3fe60806040526004361061006e5760003560e01c8063ab53f2c61161004b578063ab53f2c6146100c3578063cee12280146100e6578063f2c9f696146100f9578063fd948b861461010c57005b80631e93b0f1146100775780637963168e1461009b57806383230757146100ae57005b3661007557005b005b34801561008357600080fd5b506003545b6040519081526020015b60405180910390f35b6100756100a9366004610dcf565b61011f565b3480156100ba57600080fd5b50600154610088565b3480156100cf57600080fd5b506100d86102a5565b604051610092929190610df2565b6100756100f4366004610dcf565b610342565b610075610107366004610dcf565b61060b565b61007561011a366004610dcf565b61085c565b61012f60016000541460096109ec565b6101498135158061014257506001548235145b600a6109ec565b60008080556002805461015b90610e4f565b80601f016020809104026020016040519081016040528092919081815260200182805461018790610e4f565b80156101d45780601f106101a9576101008083540402835291602001916101d4565b820191906000526020600020905b8154815290600101906020018083116101b757829003601f168201915b50505050508060200190518101906101ec9190610ea0565b90506101ff81604001514310600b6109ec565b7f9f41c6cf17ede288cbb2cfbbafdd05b2b2025dea3b047cdb79dbc892d7a9286d8260405161022e9190610f0f565b60405180910390a16102478160200151341460086109ec565b61024f610c04565b815181516001600160a01b039091169052602080830151825182015281513360409182015281830180516001905280516000930183905280519091019190915251436060909101526102a081610a11565b505050565b6000606060005460028080546102ba90610e4f565b80601f01602080910402602001604051908101604052809291908181526020018280546102e690610e4f565b80156103335780601f1061030857610100808354040283529160200191610333565b820191906000526020600020905b81548152906001019060200180831161031657829003601f168201915b50505050509050915091509091565b61035260056000541460136109ec565b61036c8135158061036557506001548235145b60146109ec565b60008080556002805461037e90610e4f565b80601f01602080910402602001604051908101604052809291908181526020018280546103aa90610e4f565b80156103f75780601f106103cc576101008083540402835291602001916103f7565b820191906000526020600020905b8154815290600101906020018083116103da57829003601f168201915b505050505080602001905181019061040f9190610f39565b6040805184358152602080860135908201529192507fb5f68330967194c85eebaf8de848d0571722cf52211ff80fb1ea5c866248c2aa910160405180910390a161045b341560116109ec565b8051610473906001600160a01b0316331460126109ec565b6060810151601990610489906020850135610fd9565b1061050657610496610c04565b815181516001600160a01b039182169052602080840151835182015260408085015184519316920191909152808201516002905260608301516104dc9185013590610fd9565b6020808301805190910191909152608083015181516040015251436060909101526102a081610a11565b6105516040518060c0016040528060006001600160a01b031681526020016000815260200160006001600160a01b031681526020016000815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015185168187019081526060808901518189019081526080808b0151818b019081528c88013560a0808d019182526006600055436001558751998a019a909a52965195880195909552925190971690850152945194830194909452925191810191909152905160c082015260e0015b60405160208183030381529060405260029080519060200190610604929190610c5d565b50505b5050565b61061b60066000541460176109ec565b6106358135158061062e57506001548235145b60186109ec565b60008080556002805461064790610e4f565b80601f016020809104026020016040519081016040528092919081815260200182805461067390610e4f565b80156106c05780601f10610695576101008083540402835291602001916106c0565b820191906000526020600020905b8154815290600101906020018083116106a357829003601f168201915b50505050508060200190518101906106d89190610ff1565b6040805184358152602080860135908201529192507f3c04125933303f599cc5d20b6f660c4c9857a80c5f4570c2236678d0bd3959e3910160405180910390a1610724341560156109ec565b604081015161073f906001600160a01b0316331460166109ec565b6080810151601990610755906020850135610fd9565b106107e557610762610c04565b815181516001600160a01b0391821690526020808401518351820152604080850151845193169201919091528101516000905260a082015160608301516107a99190610fd9565b60208083015181019190915260808301516107c79185013590610fd9565b6020820180516040019190915251436060909101526102a081610a11565b6107ed610c04565b815181516001600160a01b0391821690526020808401518351909101526040808401518351921691015260608201516019111561083f57601982608001511015610838576001610842565b6000610842565b60025b60208201515260a082015160608301516107a99190610fd9565b61086c600160005414600e6109ec565b6108868135158061087f57506001548235145b600f6109ec565b60008080556002805461089890610e4f565b80601f01602080910402602001604051908101604052809291908181526020018280546108c490610e4f565b80156109115780601f106108e657610100808354040283529160200191610911565b820191906000526020600020905b8154815290600101906020018083116108f457829003601f168201915b50505050508060200190518101906109299190610ea0565b905061093d816040015143101560106109ec565b7fe0777bbb0edbebd8a5c254bf54fd955256e9bf9fb0fe4138cd88ac193a101d158260405161096c9190610f0f565b60405180910390a16109803415600c6109ec565b8051610998906001600160a01b03163314600d6109ec565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156109d5573d6000803e3d6000fd5b506000808055600181905561060790600290610ce1565b816106075760405163100960cb60e01b81526004810182905260240160405180910390fd5b610a19610d1e565b60208201515160011415610af657610a6b6040518060a0016040528060006001600160a01b031681526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b8251516001600160a01b0390811680835284516020908101518185019081528651604090810151851681870190815283890180518501516060808a0191825291518401516080808b01918252600560005543600155855197880198909852945193860193909352905190951694830194909452925191810191909152905160a082015260c0016105e0565b805160009081905281516002602091820181905281840180516001908190529051830152604084018051829052518201929092528301515114610b4f5760208201515115610b48578060200151610b55565b8051610b55565b80604001515b606082018190528251805160209091015191516001600160a01b03909116916108fc91610b829190611085565b6040518115909202916000818181858888f19350505050158015610baa573d6000803e3d6000fd5b508160000151604001516001600160a01b03166108fc836000015160200151836060015160200151610bdc9190611085565b6040518115909202916000818181858888f193505050501580156109d5573d6000803e3d6000fd5b6040805160a08101825260009181018281526060820183905260808201929092529081908152602001610c586040518060800160405280600081526020016000815260200160008152602001600081525090565b905290565b828054610c6990610e4f565b90600052602060002090601f016020900481019282610c8b5760008555610cd1565b82601f10610ca457805160ff1916838001178555610cd1565b82800160010185558215610cd1579182015b82811115610cd1578251825591602001919060010190610cb6565b50610cdd929150610da2565b5090565b508054610ced90610e4f565b6000825580601f10610cfd575050565b601f016020900490600052602060002090810190610d1b9190610da2565b50565b6040805160c0810190915260006080820181815260a083019190915281908152602001610d5e604051806040016040528060008152602001600081525090565b8152602001610d80604051806040016040528060008152602001600081525090565b8152602001610c58604051806040016040528060008152602001600081525090565b5b80821115610cdd5760008155600101610da3565b600060408284031215610dc957600080fd5b50919050565b600060408284031215610de157600080fd5b610deb8383610db7565b9392505050565b82815260006020604081840152835180604085015260005b81811015610e2657858101830151858201606001528201610e0a565b81811115610e38576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610e6357607f821691505b60208210811415610dc957634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610e9b57600080fd5b919050565b600060608284031215610eb257600080fd5b6040516060810181811067ffffffffffffffff82111715610ee357634e487b7160e01b600052604160045260246000fd5b604052610eef83610e84565b815260208301516020820152604083015160408201528091505092915050565b81358152604081016020830135801515808214610f2b57600080fd5b806020850152505092915050565b600060a08284031215610f4b57600080fd5b60405160a0810181811067ffffffffffffffff82111715610f7c57634e487b7160e01b600052604160045260246000fd5b604052610f8883610e84565b815260208301516020820152610fa060408401610e84565b604082015260608301516060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610fec57610fec610fc3565b500190565b600060c0828403121561100357600080fd5b60405160c0810181811067ffffffffffffffff8211171561103457634e487b7160e01b600052604160045260246000fd5b60405261104083610e84565b81526020830151602082015261105860408401610e84565b6040820152606083015160608201526080830151608082015260a083015160a08201528091505092915050565b600081600019048311821515161561109f5761109f610fc3565b50029056fea264697066735822122002b87fb513776fd764063ffafdb96e7651eb063af8ccc040e995e21d9209629d64736f6c63430008090033`,
  BytecodeLen: 5086,
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
