"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[15021],{18556:(e,o,t)=>{t.r(o),t.d(o,{comp:()=>l,data:()=>d});var a=t(24691);const i={},l=(0,t(89260).A)(i,[["render",function(e,o){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[o[7]||(o[7]=(0,a.Lk)("h1",{id:"climax-srac-23b-zbsr",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#climax-srac-23b-zbsr"},[(0,a.Lk)("span",null,"Climax SRAC-23B-ZBSR")])],-1)),(0,a.Lk)("table",null,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[o[2]||(o[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"SRAC-23B-ZBSR")],-1)),(0,a.Lk)("tr",null,[o[1]||(o[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Climax"},{default:(0,a.k6)((()=>o[0]||(o[0]=[(0,a.eW)("Climax")]))),_:1})])]),o[3]||(o[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"Smart siren")],-1)),o[4]||(o[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"battery_low, tamper, warning, squawk, max_duration, alarm, linkquality")],-1)),o[5]||(o[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/SRAC-23B-ZBSR.png",alt:"Climax SRAC-23B-ZBSR"})])],-1))])]),o[8]||(o[8]=(0,a.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="warning-usage" tabindex="-1"><a class="header-anchor" href="#warning-usage"><span>Warning usage</span></a></h3><p>Warning only support a single mode, <code>burglar</code></p><p>Duration of using <code>warning</code> can be shorter than <code>max_duration</code> but not longer. If <code>max_duration</code> are set to 60 seconds, and you try to set <code>warning</code> with <code>duration</code> of 90 seconds, the warning will only apply for 60 seconds. Default value of <code>max_duration</code> are 300 seconds</p><p>This device do not support the <code>strobe_duty_cycle</code> functionality</p><h3 id="triggering-alarm-advanced" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-advanced"><span>Triggering alarm, Advanced</span></a></h3><p>This siren can be triggered manually by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with the payloads:</p><p>To start :</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;burglar&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code> Where:</li></ul><ul><li><code>duration</code>: the number of seconds the alarm will be on</li><li><code>level</code>: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>mode</code>: <code>stop</code>, <code>burglar</code></li><li><code>strobe</code>: <code>true</code>, <code>false</code></li><li><code>strobe_duty_cycle</code>: not supported</li></ul><p>To stop:</p><ul><li><code>{&quot;warning&quot;:{&quot;duration&quot;:60,&quot;level&quot;:&quot;low&quot;,&quot;mode&quot;:&quot;stop&quot;,&quot;strobe&quot;:false,&quot;strobe_duty_cycle&quot;:0}}</code></li></ul><h3 id="triggering-alarm-simple" tabindex="-1"><a class="header-anchor" href="#triggering-alarm-simple"><span>Triggering alarm, Simple</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: &quot;START&quot;}</code> and <code>{&quot;alarm&quot;: &quot;OFF&quot;}</code> Set <code>max_duration</code> from the Zigbee2MQTT UI or by publishing <code>{&quot;max_duration&quot;: NEW_VALUE}</code> This alarm are preset to highest volume</p><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="battery-low-binary" tabindex="-1"><a class="header-anchor" href="#battery-low-binary"><span>Battery low (binary)</span></a></h3><p>Indicates if the battery of this device is almost empty. Value can be found in the published state on the <code>battery_low</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> battery low is ON, if <code>false</code> OFF.</p><h3 id="tamper-binary" tabindex="-1"><a class="header-anchor" href="#tamper-binary"><span>Tamper (binary)</span></a></h3><p>Indicates whether the device is tampered. Value can be found in the published state on the <code>tamper</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> tamper is ON, if <code>false</code> OFF.</p><h3 id="warning-composite" tabindex="-1"><a class="header-anchor" href="#warning-composite"><span>Warning (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;warning&quot;: {&quot;mode&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe_level&quot;: VALUE, &quot;strobe&quot;: VALUE, &quot;strobe_duty_cycle&quot;: VALUE, &quot;duration&quot;: VALUE}}</code></p><ul><li><code>mode</code> (enum): Mode of the warning (sound effect) allowed values: <code>stop</code>, <code>burglar</code>, <code>fire</code>, <code>emergency</code>, <code>police_panic</code>, <code>fire_panic</code>, <code>emergency_panic</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe_level</code> (enum): Intensity of the strobe allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) during warning allowed values: <code>true</code> or <code>false</code></li><li><code>strobe_duty_cycle</code> (numeric): Length of the flash cycle max value is 10</li><li><code>duration</code> (numeric): Duration in seconds of the alarm unit is s</li></ul><h3 id="squawk-composite" tabindex="-1"><a class="header-anchor" href="#squawk-composite"><span>Squawk (composite)</span></a></h3><p>Can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;squawk&quot;: {&quot;state&quot;: VALUE, &quot;level&quot;: VALUE, &quot;strobe&quot;: VALUE}}</code></p><ul><li><code>state</code> (enum): Set Squawk state allowed values: <code>system_is_armed</code>, <code>system_is_disarmed</code></li><li><code>level</code> (enum): Sound level allowed values: <code>low</code>, <code>medium</code>, <code>high</code>, <code>very_high</code></li><li><code>strobe</code> (binary): Turn on/off the strobe (light) for Squawk allowed values: <code>true</code> or <code>false</code></li></ul><h3 id="max-duration-numeric" tabindex="-1"><a class="header-anchor" href="#max-duration-numeric"><span>Max duration (numeric)</span></a></h3><p>Duration of Siren. Value can be found in the published state on the <code>max_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;max_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;max_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>s</code>.</p><h3 id="alarm-binary" tabindex="-1"><a class="header-anchor" href="#alarm-binary"><span>Alarm (binary)</span></a></h3><p>Manual start of siren. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;alarm&quot;: NEW_VALUE}</code>. If value equals <code>START</code> alarm is ON, if <code>OFF</code> OFF.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',31))])}]]),d=JSON.parse('{"path":"/devices/SRAC-23B-ZBSR.html","title":"Climax SRAC-23B-ZBSR control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Climax SRAC-23B-ZBSR control via MQTT","description":"Integrate your Climax SRAC-23B-ZBSR via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2021-02-13T14:40:13.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Warning usage","slug":"warning-usage","link":"#warning-usage","children":[]},{"level":3,"title":"Triggering alarm, Advanced","slug":"triggering-alarm-advanced","link":"#triggering-alarm-advanced","children":[]},{"level":3,"title":"Triggering alarm, Simple","slug":"triggering-alarm-simple","link":"#triggering-alarm-simple","children":[]}]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Battery low (binary)","slug":"battery-low-binary","link":"#battery-low-binary","children":[]},{"level":3,"title":"Tamper (binary)","slug":"tamper-binary","link":"#tamper-binary","children":[]},{"level":3,"title":"Warning (composite)","slug":"warning-composite","link":"#warning-composite","children":[]},{"level":3,"title":"Squawk (composite)","slug":"squawk-composite","link":"#squawk-composite","children":[]},{"level":3,"title":"Max duration (numeric)","slug":"max-duration-numeric","link":"#max-duration-numeric","children":[]},{"level":3,"title":"Alarm (binary)","slug":"alarm-binary","link":"#alarm-binary","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1729800094000},"filePathRelative":"devices/SRAC-23B-ZBSR.md"}')}}]);