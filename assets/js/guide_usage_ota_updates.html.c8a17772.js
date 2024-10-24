"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[82434],{38990:(e,a,t)=>{t.r(a),t.d(a,{comp:()=>n,data:()=>o});var i=t(24691);const s={},n=(0,t(89260).A)(s,[["render",function(e,a){return(0,i.uX)(),(0,i.CE)("div",null,a[0]||(a[0]=[(0,i.Fv)('<h1 id="ota-updates" tabindex="-1"><a class="header-anchor" href="#ota-updates"><span>OTA updates</span></a></h1><blockquote><p>An ongoing discussion about this feature can be found in <a href="https://github.com/Koenkk/zigbee2mqtt/issues/2921" target="_blank" rel="noopener noreferrer">#2921</a></p></blockquote><p>This feature allows to update your Zigbee devices over-the-air.</p><div class="hint-container tip"><p class="hint-container-title">TIP</p><p>Always check if the firmware update will bring you advantages. Firmware updates are NOT made for Zigbee2MQTT, but for working with apps and hubs from the brand. In some cases the firmware update can cause that your device will react different then Zigbee2MQTT expects, making that you can&#39;t use it the way you want, at least until Zigbee2MQTT is changed to react to those changes. If you get annoyed by the notifications that there are updates available, then turn the automatic check off.</p></div><p>Not all manufacturers make their updates available, below is a (not-complete) list of manufacturer/devices that support it:</p><ul><li>IKEA TRÅDFRI devices</li><li>Ubisys devices</li><li>Some Xiaomi devices</li><li>Salus SP600 Smart plug</li><li>Osram/Ledvance devices (not every firmware is made available by them, in case not you will see the following exception in the log <code>No image available for ...</code>)</li><li>Philips Hue devices (not every firmware is made available by them, in case not you will see the following exception in the log <code>No image available for ...</code>)</li><li>Jung ZLLxx5004M, Jung ZLLHS4 and Gira 2435-10 Gira does unfortunately not seem to offer firmware updates for their wall transmitter 2430-100 (which is very similar to the Jung ZLLxx5004M) and the update file for the Jung wall transmitter does not work for Gira (probably because the Gira wall transmitter only has 6 buttons instead of 8 on the Jung).</li><li>Sengled devices</li></ul><p>To check whether your specific device supports OTA updates via Zigbee2MQTT, go to the supported devices page, click on your device and look for the <em>OTA updates</em> section.</p><h2 id="automatic-checking-for-available-updates" tabindex="-1"><a class="header-anchor" href="#automatic-checking-for-available-updates"><span>Automatic checking for available updates</span></a></h2><p>Your zigbee devices can request a firmware update check. Zigbee2MQTT obliges this, and will automatically check if updates are available for your devices.</p><p>The update state will be published to <code>zigbee2mqtt/[DEVICE_FRIENDLY_NAME]</code>, example payload: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;available&quot;}}</code>. The possible states are:</p><ul><li><code>available</code>: an update is available for this device</li><li><code>updating</code>: update is in progress. During this the progress in % and remaining time in seconds is also added to the payload, example: <code>{&quot;update&quot;: {&quot;state&quot;: &quot;updating&quot;,&quot;progress&quot;:13.37,&quot;remaining&quot;: 219}}</code>.</li><li><code>idle</code>: no update available/in progress</li></ul><p>To protect privacy it is possible to limit how often third party servers may be contacted. You can set the minimum time that should pass between two firmware update checks, in minutes. The default is 1440 minutes (1 day). Here it is set to check at most every two days:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">update_check_interval</span><span class="token punctuation">:</span> <span class="token number">2880</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>It is also possible to completely ignore these device-initiated requests for updates checks by modifying the configuration.yaml file. In the example below, only manual firmware update checks will be possible:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">disable_automatic_update_check</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><em>NOTE: there is also a property <code>update_available</code> which is deprecated</em>.</p><h2 id="manually-check-if-an-update-is-available" tabindex="-1"><a class="header-anchor" href="#manually-check-if-an-update-is-available"><span>Manually check if an update is available</span></a></h2><p>To check if an update is available for your device send a message to <code>zigbee2mqtt/bridge/request/device/ota_update/check</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device. Example; request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>, response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;updateAvailable&quot;:true},&quot;status&quot;:&quot;ok&quot;}</code>. For battery powered end-devices you may need to trigger them by e.g. pushing a button right before checking for an OTA.</p><h2 id="update-to-latest-firmware" tabindex="-1"><a class="header-anchor" href="#update-to-latest-firmware"><span>Update to latest firmware</span></a></h2><p>Once an update is available you can update it by sending to <code>zigbee2mqtt/bridge/request/device/ota_update/update</code> with payload <code>{&quot;id&quot;: &quot;deviceID&quot;}</code> or <code>deviceID</code> where deviceID can be the <code>ieee_address</code> or <code>friendly_name</code> of the device, example request: <code>{&quot;id&quot;: &quot;my_remote&quot;}</code> or <code>my_remote</code>. Once the update is completed a response is send, example response: <code>{&quot;data&quot;:{&quot;id&quot;: &quot;my_remote&quot;,&quot;from&quot;:{&quot;software_build_id&quot;:1,&quot;date_code&quot;:&quot;20190101&quot;},&quot;to&quot;:{&quot;software_build_id&quot;:2,&quot;date_code&quot;:&quot;20190102&quot;}},&quot;status&quot;:&quot;ok&quot;}</code>.</p><p>An update typically takes +- 10 minutes. While a device is updating a lot of traffic is generated on the network, therefore it is not recommend to execute multiple updates at the same time.</p><h2 id="using-the-ikea-tradfri-test-server" tabindex="-1"><a class="header-anchor" href="#using-the-ikea-tradfri-test-server"><span>Using the IKEA TRADFRI test server</span></a></h2><p>If IKEA TRADFRI devices are rejecting OTA updates, it is possible the OTA server is providing a corrupt file. The firmwares published on the IKEA <strong>test</strong> server can be used. In most cases, this is not needed and will result in slower / no OTA updates as the test server is not kept up to date. You can instruct Zigbee2MQTT to use the test server by adding the following to your <code>configuration.yaml</code>.</p><p><strong>WARNING: Use at your own risk!</strong></p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">ikea_ota_use_test_url</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="local-ota-index-and-firmware-files" tabindex="-1"><a class="header-anchor" href="#local-ota-index-and-firmware-files"><span>Local OTA index and firmware files</span></a></h2><p>OTA Index file is a list of firmware images available on a particular server. When checking if an update is available, Zigbee2MQTT determines current hardware and firmware version for a particular device, and then searches for a suitable upgrade image in the index file. Some vendors (such as IKEA Tradfri, Ledvance, Salus, Ubisys) use their proprietary index files, but the most of the devices use <a href="https://github.com/Koenkk/zigbee-OTA" target="_blank" rel="noopener noreferrer">Zigbee-OTA</a> firmware repository with a <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/index.json" target="_blank" rel="noopener noreferrer">main index file</a>.</p><p>Sometimes it is necessary to add a firmware image that is not on the main index. This could be helpful when developing a DIY device, or install a test/alternate image for a mass-produced device. In this case user can supply Zigbee2MQTT with an alternate index file, located locally or on a web server. This index file will point Zigbee2MQTT to the firmware image files. Records in the override OTA index file will override corresponding records in the main index, so that it is possible to alter the image for a particular device type.</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">ota</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token key atrule">zigbee_ota_override_index_location</span><span class="token punctuation">:</span> my_index.json</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Local index file is searched in the configuration directory (next to <code>configuration.yaml</code>). The file name could be also a full path to the file, taking into account that host file system may not be available when running Zigbee2MQTT inside a docker container. Alternatively, Zigbee2MQTT supports index files located on a remote HTTP(s) server. In this case <code>zigbee_ota_override_index_location</code> key should be an URL of the index file.</p><p>The override OTA index file shall have the same structure as the <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/index.json" target="_blank" rel="noopener noreferrer">main index file</a>. To create the index file it is possible to use <a href="https://github.com/Koenkk/zigbee-OTA/blob/master/scripts/add.js" target="_blank" rel="noopener noreferrer">add.js</a> script (follow instructions <a href="https://github.com/Koenkk/zigbee-OTA" target="_blank" rel="noopener noreferrer">here</a>). Correct image location and image URL as necessary.</p><p>Firmware files can be located either on a web server, or on the local file system. In this case <code>url</code> field in the index file entry shall be either a full path to the image file, or relative to the Zigbee2MQTT configuration directory. In case of local image file, index entry can be simplified to only &#39;url&#39; field. Other fields are still allowed, but if omitted corresponding information (firmware version, image type, manufacturer ID, etc) is read from the image file.</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HelloZigbee.ota&quot;</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Normally Zigbee2MQTT compares current device firmware with available images version, and allows flashing only firmwares with <code>fileVersion</code> that is higher than current. To force Zigbee2MQTT to use arbitrary version a <code>force</code> field can be used:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token punctuation">[</span></span>\n<span class="line">    <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;HelloZigbee.ota&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;force&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">]</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please note, even though Zigbee specification basically allows firmware version downgrade, some of the devices may reject older firmwares. This cannot be forced from Zigbee2MQTT side.</p><h2 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting"><span>Troubleshooting</span></a></h2><ul><li><code>Device didn&#39;t respond to OTA request</code> or <code>Update failed with reason: &#39;aborted by device&#39;</code>: try restarting the device by disconnecting the power/battery for a few seconds and try again, make sure to activate the device by pressing a button on it right before sending the update request.</li><li>For battery powered devices make sure that the battery is 70%+ as OTA updating is very power consuming. Some devices check for a minimum battery level prior to updating and refuse to update.</li><li>Make sure your log level is set to &quot;info&quot; - when set to warning - the UI will not report the correct info.</li></ul>',38)]))}]]),o=JSON.parse('{"path":"/guide/usage/ota_updates.html","title":"OTA updates","lang":"en-US","frontmatter":{"pageClass":"content-page"},"headers":[{"level":2,"title":"Automatic checking for available updates","slug":"automatic-checking-for-available-updates","link":"#automatic-checking-for-available-updates","children":[]},{"level":2,"title":"Manually check if an update is available","slug":"manually-check-if-an-update-is-available","link":"#manually-check-if-an-update-is-available","children":[]},{"level":2,"title":"Update to latest firmware","slug":"update-to-latest-firmware","link":"#update-to-latest-firmware","children":[]},{"level":2,"title":"Using the IKEA TRADFRI test server","slug":"using-the-ikea-tradfri-test-server","link":"#using-the-ikea-tradfri-test-server","children":[]},{"level":2,"title":"Local OTA index and firmware files","slug":"local-ota-index-and-firmware-files","link":"#local-ota-index-and-firmware-files","children":[]},{"level":2,"title":"Troubleshooting","slug":"troubleshooting","link":"#troubleshooting","children":[]}],"git":{"updatedTime":1729800094000},"filePathRelative":"guide/usage/ota_updates.md"}')}}]);