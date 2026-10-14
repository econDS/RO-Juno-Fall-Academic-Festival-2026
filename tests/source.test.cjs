const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const {execFileSync}=require('node:child_process');
const {createHash}=require('node:crypto');
const baseline='c5d1aaf4eecccbcdbb876dee2d3eaa61615b11ea';
test('entire original guide, styles, scripts and data preserved byte-for-byte',()=>{
 const original=execFileSync('git',['show',`${baseline}:index.html`],{encoding:'utf8'});
 const candidate=fs.readFileSync('index.html','utf8').replace(/<!-- RO suite integration: stylesheet -->\n[\s\S]*?<!-- \/RO suite integration: stylesheet -->\n/,'').replace(/\n<!-- RO suite integration: navigation -->\n[\s\S]*?<!-- \/RO suite integration: navigation -->/,'');
 assert.equal(candidate,original);
});
test('approved immutable artifact hashes and source provenance',()=>{
 const hashes={'nav.js':'4dbb1926029f87aa7ba9b8bbd826d579feae3b1938e7a203fd8f6a0df5961e6a','catalog.snapshot.json':'a198338ddcb7857094ef950fb1315c532840cf53ac8e7a69b331d8cb4a87dd5d','nav.lock.json':'7c195d008803b8e19248dffba327b3824edf2c8eeeefbb94e4ad308bb8c11d58'};
 for(const [file,hash] of Object.entries(hashes)) assert.equal(createHash('sha256').update(fs.readFileSync(`assets/ro-suite/2.0.0/${file}`)).digest('hex'),hash);
 assert.equal(require('../assets/ro-suite/2.0.0/nav.lock.json').sourceCommit,'e2712f1cc4d7c72ccd31f384e5292c3d9bb19529');
});
