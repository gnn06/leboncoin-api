<<<<<<< HEAD
const cheerio = require('cheerio');
const should = require('should');

const filter = require('../lib/filters.js');
=======
const filter = require('../lib/filters.js');
const should = require("should");
>>>>>>> master
const search = require("../lib/search.js");
const item = require("../lib/item.js");

describe('Item', function() {
    describe('GetUrl', function() {
        it('with id', function(done) {
            var i = new item.Item({id: 905817796});
            i.getUrl().should.equal("http://www.leboncoin.fr/cat/905817796.htm/");
            done()
        });

        it('with id and category', function(done) {
            var i = new item.Item({id: 905817796, category: "annimal"});
            i.getUrl().should.equal("http://www.leboncoin.fr/annimal/905817796.htm/");
            done()
        });

        it('with link', function(done) {
            var i = new item.Item({link: "http://www.leboncoin.fr/annimal/905817796.htm/"});
            i.getUrl().should.equal("http://www.leboncoin.fr/annimal/905817796.htm/");
            done()
        });
    });

<<<<<<< HEAD
    describe('Parsers', function() {
        const html = '<section id="adview" class="grid-2-1" itemscope="" itemtype="http://schema.org/Offer"><section class="adview block-white flex-item-first"><header class="adview_header clearfix"><div class="print"><img src="//www2.leboncoin.fr/img/logo-mobile.png"></div><h1 class="no-border" itemprop="name"> T3 de 73 m² rénové entiérement Prox métro </h1></header><section class="adview_main"> <div id="item_image" class="item_image big popin-open trackable" data-popin-type="image" data-popin-content="//img4.leboncoin.fr/ad-large/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg" data-info="{&quot;event_name&quot; : &quot;ad_view::zoom_photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-popin-cancelclick="adview_interstitial_button,adview_interstitial_link" data-vivaldi-spatnav-clickable="1"> <span class="lazyload loaded" style="display:block; width:100%; height:100%;" data-imgsrc="//img4.leboncoin.fr/ad-image/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg" data-imgalt="T3 de 73 m² rénové entiérement Prox métro"><img itemprop="image" content="//img4.leboncoin.fr/ad-image/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg" src="//img4.leboncoin.fr/ad-image/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg" alt="T3 de 73 m² rénové entiérement Prox métro"></span> <p class="item_imageCaption">T3 de 73 m² rénové entiérement Prox métro</p><div class="layout loader hidden"><span class="loader-gif"></span></div><div class="interstitial hidden" id="adview_interstitial" data-vivaldi-spatnav-clickable="1"> <div class="container"> <p class="mbl">Contactez le vendeur pour plus d\'informations :</p><button id="adview_interstitial_button" data-href="https://api.leboncoin.fr" data-listid="1140433961" data-salesmen="1" data-textenabled="1" class="button-orange phoneNumber skip_interstitial mw trackable" data-info="{&quot;event_name&quot; : &quot;ad_reply::telephone::voir_le_numero&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;4&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-phone icon-2x skip_interstitial"></i>Voir le numéro</button> <br><a id="adview_interstitial_link" rel="nofollow" href="//www.leboncoin.fr/ar?ca=17_s&amp;id=1140433961" class="button-blue mts skip_interstitial mw trackable" data-info="{&quot;event_name&quot; : &quot;ad_reply::email::envoyer_email&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;4&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-email icon-2x skip_interstitial"></i>Envoyer un email</a> </div></div><div class="layout loader hidden"><span class="loaderGif"></span></div></div><script>var lazyloadAdviewMain=new Lazyload(".item_image.big", 2, "//static.leboncoin.fr/img/no-picture.png"); </script> <section class="carousel"><div class="thumbnails" data-alt="T3 de 73 m² rénové entiérement Prox métro" style="width: 596px;"><ul><li id="thumb_0" class="thumb selected trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><span class="item_imagePic"><img src="//img4.leboncoin.fr/ad-thumb/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg" alt="T3 de 73 m² rénové entiérement Prox métro"></span></li><li id="thumb_1" class="thumb trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><span class="item_imagePic"><img src="//img4.leboncoin.fr/ad-thumb/3cfb590216f15a12a96f1e535e925b24ec04f507.jpg" alt="T3 de 73 m² rénové entiérement Prox métro"></span></li><li id="thumb_2" class="thumb trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><span class="item_imagePic"><img src="//img4.leboncoin.fr/ad-thumb/8952cecfb19f8ee1dd3b4e3b0befbe78181d69d1.jpg" alt="T3 de 73 m² rénové entiérement Prox métro"></span></li><li id="thumb_3" class="thumb trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><span class="item_imagePic"><img src="//img5.leboncoin.fr/ad-thumb/e717826a486935b1e50d0a624228ab8028345d1e.jpg" alt="T3 de 73 m² rénové entiérement Prox métro"></span></li></ul></div><i class="icon-chevron-right icon-3x small-hidden tiny-hidden trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"></i><i class="icon-chevron-left icon-3x small-hidden tiny-hidden trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::photos&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"></i></section><p class="item_photo">4 photos disponibles</p><script>var images=new Array(), images_thumbs=new Array();images_thumbs[0]="//img4.leboncoin.fr/ad-thumb/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg"; images[0]="//img4.leboncoin.fr/ad-large/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg";images_thumbs[1]="//img4.leboncoin.fr/ad-thumb/3cfb590216f15a12a96f1e535e925b24ec04f507.jpg"; images[1]="//img4.leboncoin.fr/ad-large/3cfb590216f15a12a96f1e535e925b24ec04f507.jpg";images_thumbs[2]="//img4.leboncoin.fr/ad-thumb/8952cecfb19f8ee1dd3b4e3b0befbe78181d69d1.jpg"; images[2]="//img4.leboncoin.fr/ad-large/8952cecfb19f8ee1dd3b4e3b0befbe78181d69d1.jpg";images_thumbs[3]="//img5.leboncoin.fr/ad-thumb/e717826a486935b1e50d0a624228ab8028345d1e.jpg"; images[3]="//img5.leboncoin.fr/ad-large/e717826a486935b1e50d0a624228ab8028345d1e.jpg"; var interstitial_active=false, interstitial_trigger_number=3, carouselAdview=null; jQuery(document).ready(function(){var interstitial_adview=document.getElementById(\'adview_interstitial\'); $(\'#item_image\').attr(\'data-popin-cancelClick\', \'adview_interstitial_button,adview_interstitial_link\'); carouselAdview=new CarouselInterstitial("#adview", ".item_image.big", "thumbnails", images, images_thumbs, 3, 755, 485, 172, 118, interstitial_adview, interstitial_trigger_number); carouselAdview.init();});</script><section class="properties lineNegative"> <div class="apn-vp"> <div id="vp1-s" class="teal-apn"></div><div id="vp1-m" class="teal-apn"></div><!-- --<div id="vp2-m" class="teal-apn"></div>--></div><p class="line line_pro" itemprop="availabilityStarts" content="2017-06-30">Mise en ligne le 30 juin à 09:14</p><div class="line line_pro noborder"><p><span class="ispro">Pro Immobilier</span> <a href="//www2.leboncoin.fr/ar?ca=17_s&amp;id=1140433961" class="uppercase bold trackable" data-info="{&quot;event_name&quot; : &quot;ad_reply::email::pseudo_annonceur&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;4&quot;}" data-vivaldi-spatnav-clickable="1"> EPI IMMO</a><span> Numéro SIREN : 792295479</span></p></div><div class="apn-blt"> <div id="blt1-s" class="teal-apn"></div><div id="blt1-m" class="teal-apn"></div><div id="blt1-l" class="teal-apn"></div><!-- --><div id="blt2-l" class="teal-apn"></div><div id="blt1-xl" class="teal-apn"></div><!-- --><div id="blt2-xl" class="teal-apn"></div><div class="clear"></div></div><div class="line"> <h2 class="item_price clearfix" itemprop="price" content="199000"> <span class="property">Prix</span> <meta itemprop="priceCurrency" content="EUR"> <span class="value"> 199 000&nbsp;€ </span> </h2> </div><div class="line line_city" itemprop="availableAtOrFrom" itemscope="" itemtype="http://schema.org/Place"><h2 class="clearfix"> <span class="property"> <span class="fl">Ville</span> <button class="button-orange-mobile popin-open trackable large-hidden medium-hidden small-hidden" data-popin-type="map" data-popin-template="adviewMap" data-application="adview" data-info="{&quot;event_name&quot; : &quot;ad_view::voir_sur_la_carte&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-map-marker nomargin"></i></button> </span> <span class="value" itemprop="address">Lille 59000 </span> <button class="button-orange-mobile popin-open trackable tiny-hidden" data-popin-type="map" data-popin-template="adviewMap" data-application="adview" data-info="{&quot;event_name&quot; : &quot;ad_view::voir_sur_la_carte&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-map-marker nomargin"></i></button> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">Frais d\'agence inclus</span> <span class="value">Oui</span> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">Type de bien</span> <span class="value">Appartement</span> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">Pièces</span> <span class="value">3</span> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">Surface</span> <span class="value">73 m<sup>2</sup></span> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">GES</span> <span class="value"> <a class="popin-open" href="#" data-popin-template="dpe" data-popin-type="general" data-popin-category="9">C (de 11 à 20)</a> </span> </h2></div><div class="line"> <h2 class="clearfix"> <span class="property">Classe énergie</span> <span class="value"> <a class="popin-open" href="#" data-popin-template="dpe" data-popin-type="general" data-popin-category="9">C (de 91 à 150)</a> </span> </h2></div><div class="line properties_description"><p class="property semibold">Description :</p><p class="value" itemprop="description">Appartement de 73 m² dans immeuble entiérement rénové situé rue philippe de comine à Lille <br>proximité immédiate du métro porte de douai et de la faculté de droit .<br>Idéal placement ou 1 er achat .<br>Copropriété de 6 lots <br>Double vitrage , chauffage gaz , .....<br>Charges en cours d\'estimation.<br>à saisir!</p></div><script>var apiKey="54bb0281238b45a03f0ee695f73e704f"; </script></section></section><footer class="adview_footer mts"><div class="grid-4 sharer clearfix"><div><span class="flat-horizontal saveAd link-like" data-savead-id="1140433961" title="Sauvegarder l\'annonce" data-vivaldi-spatnav-clickable="1"><div class="saveMsg trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::sauvegarder::on&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-heart-outline"></i>Sauvegarder l\'annonce</div><div class="savedMsg red trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::sauvegarder::off&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-heart"></i>Annonce sauvegardée<span class="flagMyAds"> dans «Mes annonces»</span></div><div title="" class="disabledLink disabled showTip" data-text="Le nombre maximum d\'annonces sauvegardées a été atteint." data-vivaldi-spatnav-clickable="1"><i class="icon-heart"></i>Sauvegarder l\'annonce</div><div title="" class="failedMsg disabled showTip" data-text="Fonctionnalité indisponible pour le moment." data-vivaldi-spatnav-clickable="1"><i class="icon-heart-outline"></i>Sauvegarder l\'annonce</div></span></div><a rel="nofollow" title="Signaler l\'annonce" href="//www2.leboncoin.fr/support/form/0?id=1&amp;ca=17_s&amp;subject=15&amp;ad=1140433961" class="flat-horizontal trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::signaler_un_probleme&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;click_type&quot; : &quot;N&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-alert-circle"></i>Signaler l\'annonce</a><div class="flex-item-double"><span class="sharer_title semibold"><i class="icon-share-variant"></i>Partager l\'annonce</span><div class="sharer_social"><button class="share facebook trackable" data-href="http://www.facebook.com/sharer.php?u=https://www.leboncoin.fr/ventes_immobilieres/1140433961.htm?ca=17_s" data-info="{&quot;event_name&quot; : &quot;ad_view::partage::reseaux_sociaux::facebook&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;event_s2&quot; : &quot;2&quot;, &quot;click_type&quot; : &quot;S&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-facebook nomargin"></i></button><button class="share twitter trackable" data-href="https://twitter.com/share" data-text="T3 de 73 m² rénové entiérement Prox métro Ventes immobilières Nord" data-url="https://www.leboncoin.fr/vi/1140433961.htm" data-hashtag="leboncoin" data-info="{&quot;event_name&quot; : &quot;ad_view::partage::reseaux_sociaux::twitter&quot;, &quot;event_type&quot; : &quot;click&quot;, &quot;event_s2&quot; : &quot;2&quot;, &quot;click_type&quot; : &quot;S&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-twitter nomargin"></i></button><button rel="nofollow" class="share mail trackable" title="Envoyer l\'annonce par mail" data-info="{&quot;event_name&quot; : &quot;ad_view::partage::email_ami::formulaire&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-email nomargin"></i></button></div></div></div><div id="saveAd_error" class="hidden">Le nombre maximum d\'annonces sauvegardées a été atteint.</div><aside id="sendMail" class="sendMail"><p class="sendMail_title">Envoyer l\'annonce par mail</p><form action="/st" method="post"><input type="hidden" name="ca" value="17_s"><input type="hidden" name="id" value="1140433961"><div class="line"><label for="tip_sender" class="label">Votre adresse mail : </label><div class="field-wrapper"><input name="tip_sender" type="text" size="30" value="" maxlength="60" id="tip_sender" class="input full" data-cip-id="tip_sender"></div></div><div class="line"><label for="tip_email" class="label">L\'adresse mail de votre ami(e) : </label><div class="field-wrapper"><input name="tip_email" type="text" size="30" value="" maxlength="60" id="tip_email" class="input full" data-cip-id="tip_email"></div></div><input type="submit" value="Envoyer" class="button-blue" data-info="{&quot;event_name&quot; : &quot;ad_view::partage::email_ami::confirmation&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}"></form><div class="information"> <p class="information_title">Information : </p><p class="information_text"><a href="//www.leboncoin.fr/popup_collecte_donnees_conseiller.htm&#10;" onclick="return cnilPopup(this, 700, 300);">- Le responsable de traitement, les destinataires et la finalité de la collecte des données.</a><br><a href="//www.leboncoin.fr/popup_droits_opposition.htm" onclick="return cnilPopup(this, 700, 300);">- Vos droits d\'opposition, d\'accès et de rectification sur vos données collectées.</a></p></div><script type="text/javascript">function cnilPopup(link, width, height){var left=window.screenX + (screen.width / 2) - (width / 2); var top=(screen.height / 2) - (height / 2); var windowFeatures="status=no,height=" + height + ",width=" + width + ",resizable=yes,left=" + left + ",top=" + top + ",toolbar=no,menubar=no,scrollbars=no,location=no,directories=no"; u=link.href; t=document.title; window.open(u,\'InfosCNIL\', windowFeatures); return false;}</script></aside></footer></section><aside class="sidebar" role="complementary"><div class="fixedSrolling"><div class="box-grey-light mbs align-center"><p class="title ad_pro">EPI IMMO</p><div class="container"> <button data-href="https://api.leboncoin.fr" data-listid="1140433961" data-salesmen="1" data-textenabled="1" class="button-orange large phoneNumber trackable" data-info="{&quot;event_name&quot; : &quot;ad_reply::telephone::voir_le_numero&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;4&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-phone icon-2x"></i>Voir le numéro</button> <a rel="nofollow" href="//www.leboncoin.fr/ar?ca=17_s&amp;id=1140433961" class="button-blue large trackable" data-info="{&quot;event_name&quot; : &quot;ad_reply::email::envoyer_email&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;4&quot;}" data-vivaldi-spatnav-clickable="1"><i class="icon-email icon-2x"></i>Envoyer un email</a> </div></div><div class="box-grey-light mbm align-center"><p class="title">Gérer votre annonce</p><div class="container"><div class="grid-2"><button class="flat-vertical link-like popin-open trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::gerer_annonce::mettre_en_avant&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-popin-type="general" data-popin-template="connexion" data-follow-url="//www2.leboncoin.fr/ai?ca=17_s&amp;id=1140433961&amp;cmd=gallery7" data-vivaldi-spatnav-clickable="1"><i class="icon-star icon-2x"></i>Mettre en avant</button><button class="flat-vertical link-like popin-open trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::gerer_annonce::remonter_en_tete_de_liste&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-popin-type="general" data-popin-template="connexion" data-follow-url="//www2.leboncoin.fr/ai?ca=17_s&amp;id=1140433961&amp;cmd=daily_bump" data-vivaldi-spatnav-clickable="1"><i class="icon-sort-ascending icon-2x"></i>Remonter en tête de liste</button> <button class="flat-vertical link-like mts popin-open trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::gerer_annonce::modifier&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-popin-type="general" data-popin-template="connexion" data-follow-url="//www2.leboncoin.fr/ai?ca=17_s&amp;id=1140433961&amp;cmd=edit" data-vivaldi-spatnav-clickable="1"><i class="icon-pencil icon-2x"></i>Modifier l\'annonce</button><button class="flat-vertical link-like mts popin-open trackable" data-info="{&quot;event_name&quot; : &quot;ad_view::gerer_annonce::supprimer&quot;, &quot;event_type&quot; : &quot;load&quot;, &quot;event_s2&quot; : &quot;2&quot;}" data-popin-type="general" data-popin-template="connexion" data-follow-url="//www2.leboncoin.fr/ai?ca=17_s&amp;id=1140433961&amp;cmd=delete" data-vivaldi-spatnav-clickable="1"><i class="icon-delete icon-2x"></i>Supprimer l\'annonce</button></div></div></div><div class="apn-vp"> <div id="vp1-l" class="teal-apn"></div><div id="vp2-l" class="teal-apn"></div><div id="vp3-l" class="teal-apn"></div><div id="vp4-l" class="teal-apn"></div><div id="vp1-xl" class="teal-apn"></div><div id="vp2-xl" class="teal-apn"></div></div><div class="apn-pv"> <div id="pv2-l" class="teal-apn"></div><div id="pv-xl" class="teal-apn"></div></div><script>var apiKey="54bb0281238b45a03f0ee695f73e704f"; var lat="50.63716 "; var lng="3.06284 "; var source=$.trim("user "); var zipcode=$.trim("59000 "); var adreplyLink="//www.leboncoin.fr/ar?ca=17_s&id=1140433961"; var city=$.trim("Lille "); var category=$.trim("9 "); // If IE7 and polygon view, hide carto link if ( $(\'body\').hasClass(\'ua_IE7\') && (source=="city" || source=="zipcode")){$(".carto-link").hide();}//Save ad (Mes annonces) jQuery(document).ready(function(){var savead=new SaveAd(".leboncoin.fr");}); </script></div></aside></section>';
        const $ = cheerio.load(html);

        it('parse Table data', function(done) {
            var data = item.parseTableData($);

            data.zip.should.be.exactly(59000);
            data.city.should.equal('Lille');
            done();
        });

        it('parse images', function(done) {
            var images = item.parseImages($);
            images.should.have.length(4);
            images[0].should.equal('//img4.leboncoin.fr/ad-large/2c67aa36f185a74dbbfc2b85cf8454d1883203b8.jpg');
            done();
        });
    });

=======
    
>>>>>>> master
    describe('getDetails', function() {
        this.timeout(500000);
        it('Get the details of an item', function(done) {
            new search.Search().run().then(function (data) {
                data.results[0].getDetails().then(function (data) {
                    data.should.have.property('images');
                    data.should.have.property('description');
                    data.should.have.property('title');
                    data.should.have.property('id');
                    //console.log(data);
                    done()
                }, function (err) {
                    done(err);
                });
            }, function (err) {
                done(err);
            });
        });

        it('Get the details of a motobike', function(done) {
            var input = new item.Item();
            input.details = {
                attributes : [
                    { key : "regdate", value : "2018"},
                    { key : "mileage",  value : "40000"},
                    { key : "cubic_capacity",  value : "600"}
                ]
            };
            var output = input.getBike();
            output.should.have.property('bike');
            output.bike.should.have.property('regdate').and.be.exactly('2018');
            output.bike.should.have.property('mileage').and.be.exactly('40000');
            output.bike.should.have.property('cubic_capacity').and.be.exactly('600');
            done();
        });

        it('Get the details of a motobike with missing value', function(done) {
            var input = new item.Item();
                input.details = {
                attributes : [
                    { key : "mileage",  value : "40000"},
                    { key : "cubic_capacity",  value : "600"}
                ]
            };
            var output = input.getBike();
            output.bike.should.have.property('regdate').and.be.exactly('');

            input.details = {
                attributes : [
                    { key : "regdate", value : "2018"},
                    { key : "cubic_capacity",  value : "600"}
                ]
            };
            var output = input.getBike();
            output.bike.should.have.property('mileage').and.be.exactly('');

            input.details = {
                attributes : [
                    { key : "regdate", value : "2018"},
                    { key : "mileage",  value : "40000"}
                ]
            };
            var output = input.getBike();
            output.bike.should.have.property('cubic_capacity').and.be.exactly('');
            done();
        });
    });
<<<<<<< HEAD

=======
>>>>>>> master
    /*describe('GetPhoneNumber', function() {
        this.timeout(500000);
        it('get phone number 1', function(done) {
            new search.Search()
                .setPage(1)
                .setQuery("renove")
                .run().then(function (data) {
                data.results[0].getPhoneNumber().then(function (phone) {
                    done(null, phone);
                }, function (err) {
                    done(err);
                });
            }, function (err) {
                done(err);
            });
        });
    });*/
<<<<<<< HEAD
});

describe('assignMap', function() {
    describe('assignMap', function() {
        it('should assign bike property', function(done) {
            var m = [ { key : "cubic_capacity", value : "600" }, { key : "mileage", value : "10000" }, { key : "regdate", value : "2012" } ];
            var o = new item.Item();

            o.assignBikeMapDefault(o, m);

            o.should.have.property('cubic_capacity').and.equal('600');
            o.should.have.property('mileage').and.equal('10000');
            o.should.have.property('regdate').and.equal('2012');

            done();
        });

        it('should assign only bike property', function(done) {
            var m = [ { key : "not_a_bike_property", value : "valeur" } ];
            var o = new item.Item();
    
            o.assignBikeMapDefault(o, m);
    
            o.should.not.have.property('not_a_bike_property');
    
            done();
        });

        it('should initialise missing bike property', function(done) {
            var m = [ { key : "mileage", value : "10000" } ];
            var o = new item.Item();
    
            o.assignBikeMapDefault(o, m);
    
            o.should.have.property('regdate').and.equal('');
    
            done();
        });
    });
=======
    
>>>>>>> master
});
