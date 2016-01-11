# Change Log
All notable changes to the Best Buy API will be documented in this file.


<section class="log-entry">

## R15.15 - 2015-10-01
### Changed
- Added `shippingLevelsOfService` attribute to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** in accordance with changes made to shipping options on BESTBUY.COM
 - Updated shipping data is being delivered via the existing shipping attribute as well in order to minimize impact during the pre-holiday and holiday season
 - Current shipping attribute has been deprecated and will be removed

</section>
<section class="log-entry">

## R15.14 - 2015-09-01
### Changed
- The `protectionPlans` attribute for **[GeekSquad Protection Plans/Services](https://developer.bestbuy.com/documentation/products-api#documentation/products-api-geeksquad-plans-services)** will not return any plan data until further notice

### Notes
- The Offer Transition project in **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** has completed and all offers of type `special_offer` have been restored.

</section>
<section class="log-entry">

## R15.8 - 2015-08-01
### Notes
-  Update on Offer Transition in the Products API: We are almost finished transitioning how the Products API receives offers. You may notice a temporary decrease in the number of offers available during this transition. Our plan is to provide full offers by the end of August. 

</section>
<section class="log-entry">

## R15.7 - 2015-07-01
### Changed
- Retired `Featured Offers` from Products API for reasons noted in R15.5
 -   We continue to provide `Special Offers`, `Deal of the Day Offers` and `Digital Insert Offers`
 

</section>
<section class="log-entry">

## R15.6 - 2015-06-01
### Changed
- Updated `postal codes` in Remix to include any new codes. Queries that include the Stores API may now return additional stores.

### Notes
- Possible data outage: Throughout July and August, product-offer information within Best Buy is being adjusted. There may be sporadic times when endpoints containing promotion information (e.g. “This item has free shipping.”) will be negatively impacted.

</section>
<section class="log-entry">

## R15.5 - 2015-05-01
### Changed
- Updated the Product Offers Deal of the Day source
- No longer populating Deal of the Day `offers.text` field, as it was determined to be repetitive
- No longer publishing a SKU with a rank of 1 for the following attributes due to past confusion:
 - `bestSellingRank`
 - `salesRankShortTerm`
 - `salesRankMediumTerm`
 - `salesRankLongTerm`
- Removed Featured Offers from Products API, as this data has evolved into landing pages on BESTBUY.COM instead of individual SKUs

</section>
<section class="log-entry">

## R15.4 - 2015-04-01
### Added
- `Address2` attribute to **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)**, providing additional address information for Best Buy stores

</section>
<section class="log-entry">

## R15.3 - 2015-03-01
### Added 
- `Active Adventurer` endpoint to the **[SmartList API](https://developer.bestbuy.com/documentation/smartLists-api)**, providing top-rated fitness and outdoor products
- Categories API to the **[Query Builder](http://bestbuyapis.github.io/bby-query-builder/#/productSearch)** tool, allowing queries based on:
 - All Categories
 - Top Level Categories
 - Search Categories by Name
 - Search Categories by Category Id
 
### Changed 
- Removed mock 404, as we have improved our code enough to make it rare and extraneous
- Now including `pageSize` and `page` as part of the Canonical URL in our response document. This will impact the following endpoints:
 - Open Box by Category
 - Open Box All SKUs
 

</section>
<section class="log-entry">

## R15.2.1 - 2015-02-15
### Added
- **[SmartLists API](https://developer.bestbuy.com/documentation/smartLists-api)** to provide a guided shopping experience for the Connected Home endpoint and more

### Changed
- Replaced API Console with **[Query Builder](http://bestbuyapis.github.io/bby-query-builder/#/productSearch)**, allowing user to create queries for most of our APIs
- Updated Recommendations and Buying Options endpoints to return results for inactive SKUs, Categories and SubCategories

</section>
<section class="log-entry">

## R15.2 - 2015-02-01
### Added
- Open Box List of SKUs to **[Buying Options API](https://bestbuyapis.github.io/api-documentation/#buying-options-open-box-api)**
 -  Returns at most 100 SKUs
- Added `pre-owned` value to `condition` attribute, to represent products that were previously owned and Best Buy received as part of a trade-in before reselling
 - Expands `pre-owned` to include all products of type hardgood in addition to game

### Changed  
- Enhanced `Trending Products` endpoint in **[Recommendations API](https://bestbuyapis.github.io/api-documentation/#recommendations-api)** to allow searching by Category or Subcategory

</section>
<section class="log-entry">

## R14.9 - 2015-01-01
### Changed
- Enhanced `Open Box` endpoint in **[Buying Options API](https://bestbuyapis.github.io/api-documentation/#buying-options-open-box-api)** to allow searching by Category or Subcategory
- Renamed the `Open Box Multi SKU` endpoint to `Open Box All SKUs`
- Removed `arg` from Buying Options and Recommendations endpoints, as the information was already available in the canonical URL

</section>
<section class="log-entry">

## R14.8 - 2014-12-01
### Added
- **[Buying Options API](https://bestbuyapis.github.io/api-documentation/#buying-options-open-box-api)** Beta
 - Provides information about ship-from-store eligible Open Box products, including availability, condition and special pricing
- New `express` value added to `storeType` attribute of **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)** to identify Best Buy Express kiosk locations
 - Also added <location> attribute  for instances where existing Best Buy Express address information is insufficient

### Changed
- Enhancements to **[Recommendations API](https://bestbuyapis.github.io/api-documentation/#recommendations-api)**
  - Added several attributes
  - Enhanced `Most Popular Viewed` endpoint to allow pulling top products by category or subcategory
  - Moved `productLink` attribute to links section and renamed it `product`
  
### Fixed
- Corrected reference to `productsHardGood` in Archives to `productHardgood`

</section>
<section class="log-entry">

## R14.7 - 2014-10-01
### Changed
- Further **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attributes to be deprecated, as per R14.6:
 - `analogAudioInputs` - Deprecated
 - `avOutputs` - Deprecated
 - `brightnessNits` - New Int
 - `brightnessCdPerSqM` - New Int
 - `builtInDigitalCamera` - will continue, and will be further expressed as New Booleans: `frontFacingCamera`and `rearFacingCamera`
 - `frontFacingCamera` - New boolean
 - `rearFacingCamera` - New boolean
 - `builtForBluRay` - Deprecated
 - `builtInPlayer` - Deprecated
 - `capacityCuFt` - will be supplemented with New Decimals `capacityRefrigeratorCuFt` and `capacityFreshFoodCuFt`
 - `capacityFreezerCuFt` - New Decimal
 - `clock` - Deprecated
 - `combFilter` - Deprecated
 - `customSettings` - Deprecated
 - `cycleDescriptions` - Deprecated
 - `digitalAudioOutputs` - Deprecated and replaced with New Int `numberOfOpticalDigitalAudioOutputs` and `numberOfCoaxialDigitalAudioOutputs`
 - `digitalOutputs` - Deprecated
 - `digitalTuner` - Deprecated
 - `dolbyDigitalDecoder` - Deprecated
 - `dynamicContrastRatio` - Deprecated and replaced with New Strings `maximumContrastRatioDynamic` and `minimumContrastRatioDynamic`
 - `estimatedYearlyOperatingCosts` - Deprecated (was a list of values) and replaced with New Int `estimatedYearlyOperatingCostsUsd`
 - `fiveOneChannelInput` - Deprecated
 - `fiveOneChannelOutput` - Deprecated
 - `frontPanelAvInputs` - Deprecated
 - `frontSurroundPowerPerChannel` - Deprecated
 - `hdRadioCompatible` - Deprecated
 - `hdRadioReady` - Deprecated
 - `hdtvCompatibility` - Deprecate
 - `heightWithStandIn` - Deprecated and replaced with New Decimal `productHeightIn`
 - `maximumStandHeightIn` - New Decimal
 - `minimumStandHeightIn` - New Decimal
 - `standHeightIn` - New Decimal
 - `ipodDock` - Deprecated
 - `iphoneAccessory` - Deprecated
 - `lcdScreenSizeIn` - Deprecated, users should rely on `screenSizeIn`
 - `ledButtons` - Deprecated
 - `maximumPowerHandling` - Deprecated
 - `maximumResolutionHorizontalPx` - Deprecated
 - `maximumResolutionVerticalPx` - Deprecated
 - `mediaPort` - Deprecated
 - `mms` - Deprecated
 - `mp3PlaybackCapability` - Deprecated
 - `pcInputs` - Deprecated, replaced with New Boolean `pcInput`
 - `phonoInputs` - Deprecated
 - `powerSourceRatings` - Deprecated
 - `preampOutputs` - Deprecated
 - `rearSurroundPowerPerChannel` - Deprecated
 - `rfAntennaInputs` - Deprecated, replaced with New Boolean `rfAntennaInput`
 - `sanitationAllergyCycle` - Deprecated, replaced with New Booleans `sanitationCycle` and `allergyCycle`
 - `satelliteRadioReady` - Deprecated
 - `sdCardSlot` - Deprecated
 - `shelfSystemType` - Deprecated
 - `sixOneChannelInput` - Deprecated
 - `soundLeveler` - Deprecated
 - `soundType` - Deprecated
 - `speakerLocation` - Deprecated
 - `subwooferPowerWatts` - Deprecated
 - `subwooferSizeIn` - Deprecated
 - `surroundSoundDecoders` - Deprecated
 - `threeDPassThrough` - Deprecated
 - `thruTheDoorIceDispenser` - Deprecated, replaced with `throughTheDoorDispenser`
 - `thruTheDoorWaterDispenser` - Deprecated, replaced with `throughTheDoorDispenser`
 - `touchPadControls` - Deprecated
 - `waterFiltrationReplacementIndicatorLight` - Deprecated
 - `wattsPerChannel` - Deprecated, replaced with `wattsPerChannelRms`

</section>
<section class="log-entry">

## R14.6 - 2014-09-01
### Changed
- Updated various **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attributes to make product data more consistent and easier to understand
 - These attributes will no longer appear as top-level on product data returned by the Products API
 -  Data represented by these attributes may still be available in the details collection of relevant products, but the detail name, format and structure of the detail value may change
 - Some attributes will be gradually phased out
  - `avOutputs`
  - `builtForBluRay`
  - `clock`
  - `customSettings`
  - `cycleDescriptions`
  - `digitalAudioInputs`
  - `digitalAudioOutputs`
  - `digitalOutputs`
  - `digitalTuner`
  - `dolbyDigitalDecoder`
  - `fiveOneChannelInput`
  - `fiveOneChannelOutput`
  - `hdtvCompatibility`
  - `sixOneChannelInput`

### Notes
- Runtime responses from the Products API will continue to indicate that these attributes can be used​ for searching, even as the attributes slowly disappear from the product data. For instance, the top level attribute `clock` is being retired. Over time, the results of a search on `clock=*` will diminish. Eventually, that search will return no results. However, in the details of some products, you may find a detail named `clockDisplay` with a value of "Yes" or "No". In other products, you may find details named with other variations indicating `clock` with a variety of possible values.
This will impact applications that provide filtering using the top level attributes. If an application provides filtering for whether products include a clock using the `clock` top level attribute, that filtering will cease to work as expected over time. This change should not cause such an application to produce an error or cease functioning.

- The product data updates will also impact applications that display these attributes. In this example, the `clock` attribute will no longer display. If the application has hard-coded usage of the `clock` attribute, that application may produce errors or cease functioning.

</section>
<section class="log-entry">

## R14.5 - 2014-07-01
### Added
- **[Recommendations API](https://bestbuyapis.github.io/api-documentation/#recommendations-api)** Beta endpoints:
 - `similar` - takes any hardgood or software SKU and returns the top products similar to it based on the number of product attributes that match
 - `trendingViewed` - returns what is hot right now on BESTBUY.COM by returning the top ten trending products based on product page views over a specific timeframe
 - `mostPopular` returns the most frequently viewed products across all of BESTBUY.COM based on page views (versus Trending Products that shows change in velocity)
 - `alsoViewed` returns the most frequently viewed products other customers viewed after the driver SKU

### Notes
- To access these new endpoints while they are in beta, please send your user name and key(s) to developer@bestbuy.com and we will enable them for your existing API key(s). If you don't have an API key, visit our **[registration page](https://remix.mashery.com/member/register)** first. The response returned from our Recommendations endpoints is similar to that of our Products API.

</section>
<section class="log-entry">

## R14.4 - 2014-06-01
### Added
- New attribute to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)**
 - `customerTopRated` - indicates if a product is top-rated based on customer reviews
- Two attributes to **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)**
 - `storeType` - provides information such as "Big Box" or "Mobile"
 - `tradeIn` - provides store trade-in policy and conditions for trading in products such as mobile phones and games

### Changed
- Updated data source for `relatedProducts` attribute to provide both more relevant related product information and data for more SKUs in our catalog

</section>
<section class="log-entry">

## R14.3 - 2014-05-01
### Changed
- Unspecified operational updates

</section>
<section class="log-entry">

## R14.2 - 2014-02-01
### Added
- `productFamilies` attributes to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)**, listing associated SKUs based on specified groupings (alternate color, for instance)

</section>
<section class="log-entry">

## R14.1 - 2014-01-01
### Changed
- Deactivated Commission Junction links after converting to LinkShare, replaced with a 400 Bad Request error
- Removed two attributes from **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)**:
 - `cjAffiliateUrl`
 - `cjAffiliateAddToCartUrl`
 

</section>
<section class="log-entry">

## R13.8 - 2013-11-01
### Added
-  New hours attributes for **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)** 
 - `detailedHours.day` - specific day of the week
 - `detailedHours.date` - provides the date of the day
 - `detailedHours.open` - store opening time for that day
 - `detailedHours.close` - store closing time for that day
 - `gmtOffset`
 - `hoursAmPm` - store open hrs for the entire week in AM/PM format
 

</section>
<section class="log-entry">

## R13.7 - 2013-10-01
### Changed
- Added support for a `facet=attribute,{number of facets}` function for attributes which can be queried

</section>
<section class="log-entry">

## R13.6 - 2013-09-01
### Added
- **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attribute to indicate whether a SKU qualifies for a specific 9/12/13 free shipping promotion 
- Two **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attributes for our new Affiliate Management Agency LinkShare
 - `linkShareAffiliateUrl` takes customer to PDP of the product and track referral credit
 - `linkShareAffiliateAddToCartUrl` initiates a bestbuy.com cart with the product in the cart and tracks referral/sales credit

### Changed
- Added support for a `range(lower,upper)` function for numeric and date attributes only
- Added support for approximate searches on date-type and time attributes using tilde (~) operator

</section>
<section class="log-entry">

## R13.5 - 2013-08-01
### Changed
-  Added support for approximate searches on numeric attributes using the tilde (~) operator

</section>
<section class="log-entry">

## R13.4 - 2013-07-01
### Added
- New **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attributes
 - `regular price` and `sale price` for cell phones with plans for both new two year contracts and upgrades to clarify cell phone pricing 
 - `techSupportPlans` attribute to associate Geek Squad Technical Support SKUs to the parent SKU 
 

</section>
<section class="log-entry">

## R13.3 - 2013-05-01
### Added
- Two attributes to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** 
 - `percentSavings` attribute - calculates savings between `regularPrice` and `salePrice` attribute
 - `lowPriceGuarantee` - finds SKUs that qualify for the Best Buy Low Price Guarantee
- One attribute to **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)** 
 - `services.service` - finds stores offering specific services
 

</section>
<section class="log-entry">

## R13.2 - 2013-04-01
### Added
- `shippingRestrictions` attribute to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** to indicate Marketplace products with restrictions
- Three new `Music` attributes
  - `mediaCount` - Number of discs
  - `monoStereo` - Mono or stereo recording
  - `studioLive` - Studio or live performance
- Six new `Movies` attributes
 - `additionalFeatures` - Bonus tracks, interviews, trailers, etc.
 - `videoChapters` - The movie's scenes
 - `videoLanguage` - Main audio language
 - `screenFormat` - Enhanced Widescreen for 16x9 TV, Full Screen, Widescreen, etc.
 - `subtitleLanguage`
 - `fulfilledBy` - Indicates if a title is fulfilled by Cinema Now
 
### Changed
- Expanded `dollarSavings` in **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** to include all products
- Expanded `shippingWeight` in **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** to include all shippable products

</section>
<section class="log-entry">

## R13.1 - 2013-03-01
### Added
- `productTemplate` attribute to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)**, making our product data-modeling template public
- Subsets to allow more focused searches of our archives

### Changed
- Importing more digital products data to match Best Buy's expanded assortment

</section>
<section class="log-entry">

## R12.5 - 2012-08-01
### Added
-  `priceRestriction` attribute to **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** to accommodate "See price in cart" listings

### Changed
- Categories can now be made active or inactive

</section>
<section class="log-entry">

## R12.4 - 2012-07-01
### Added
- New **[Reviews API](https://bestbuyapis.github.io/api-documentation/#reviews-api)** attribute
- `planPrice` attributes for Mobile Phones

### Changed
- Updated **[Stores API](https://bestbuyapis.github.io/api-documentation/#stores-api)** to avoid returning recently closed stores
- Updated logic that sets values in Boolean attributes `onlineAvailability` and `inStoreAvailability`
- Updated product data to refresh every 15 minutes

</section>
<section class="log-entry">

## R12.3 - 2012-05-01
### Added
- Dedicated `Archives` job queue for more consistent time-keeping

### Changed
- Updated displayed-price rules

</section>
<section class="log-entry">

## R12.2 - 2012-04-01
### Changed
- 19 unspecified operational updates

</section>
<section class="log-entry">

## R12.1 - 2012-02-01

###Added
- Four new **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** attributes:
- `onlinePlay`for Games and Software
- `numberOfPlayers` for Games and Software
- `collection`
- `bestSellingRank`
 
###Changed
 - Reduced Product data latency
 - Updated `albumLabel` attribute for Music
 - Updated `genre` attribute for Music and Movies to allow a list of genres
 - Removed the following attributes
  - `albumVersion`
  - `appleConnectivity`
  - `brand`
  - `cellPhoneBrand`
  - `copyright`
  - `napsterAlbumId`
  - `nationalFeatured`
  - `navigability`
  - `preferredRelatedBestBuySku`
  - `preferredRelatedNapsterSku`
  - `printOnly`
  - `related.active`, `related.sku`, `related.type`, `related.title`
  - `saleEndDate`
  - `savings`
  - `skuSourceIndicator`
  - `smartPhone`
  - `softwareMultiplayerInternet`, `softwareOnlinePlay`, `softwareNumberOfPlayers`
  - `softwareReleaseDate`
  - `tinyMobileUrl`

</section>
<section class="log-entry">

## R11.2 - 2011-06-01

### Added
- Four new **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** shipping costs attributes:
  - `Ground` 
  - `secondDay`
  - `nextDay` 
  - `vendorDelivery`
  
### Changed
- Floating-point search enhancement
- Overall search improvement

</section>
<section class="log-entry">

## R11.1 - 2011-05-01

### Added
- Three new **[Products API](https://bestbuyapis.github.io/api-documentation/#products-api)** Products attributes:
  - `tradeIn Value` 
  - `Preowned`
  - `Digital Products` 

</section>
