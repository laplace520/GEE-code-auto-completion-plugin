(function (root, factory) {
  if (typeof module === "object" && module.exports) {
    module.exports = factory();
    return;
  }
  root.__GEE_API_DATA__ = factory();
})(typeof globalThis !== "undefined" ? globalThis : this, function () {
  "use strict";

  return [
  {
    "receiver": "ee",
    "name": "Algorithms",
    "signature": "Algorithms namespace",
    "insertText": "Algorithms",
    "doc": "Namespace: ee.Algorithms",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "apply",
    "signature": "apply(func, namedArgs)",
    "insertText": "apply(${1:func}, ${2:namedArgs})",
    "doc": "Returns an object representing the called function. If the signature specifies a recognized return type, the returned value will be cast to that type.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Array",
    "signature": "Array(values, pixelType)",
    "insertText": "Array(${1:values}, ${2:pixelType})",
    "doc": "Arrays can be constructed from ee.Number objects or ee.List sequences.",
    "kind": "constructor",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Blob",
    "signature": "Blob(url)",
    "insertText": "Blob(${1:url})",
    "doc": "Loads a Blob from a Google Cloud Storage URL.",
    "kind": "constructor",
    "returnType": "ee.Blob"
  },
  {
    "receiver": "ee",
    "name": "call",
    "signature": "call(func, var_args)",
    "insertText": "call(${1:func}, ${2:var_args})",
    "doc": "Returns an object representing the called function. If the signature specifies a recognized return type, the returned value will be cast to that type.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Classifier",
    "signature": "Classifier namespace",
    "insertText": "Classifier",
    "doc": "Namespace: ee.Classifier",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Clusterer",
    "signature": "Clusterer namespace",
    "insertText": "Clusterer",
    "doc": "Namespace: ee.Clusterer",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "ConfusionMatrix",
    "signature": "ConfusionMatrix(array, order)",
    "insertText": "ConfusionMatrix(${1:array}, ${2:order})",
    "doc": "Creates a confusion matrix. Axis 0 (the rows) of the matrix correspond to the actual values, and Axis 1 (the columns) to the predicted values.",
    "kind": "constructor",
    "returnType": "ee.ConfusionMatrix"
  },
  {
    "receiver": "ee",
    "name": "data",
    "signature": "data namespace",
    "insertText": "data",
    "doc": "Namespace: ee.data",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Date",
    "signature": "Date(date, tz)",
    "insertText": "Date(${1:date}, ${2:tz})",
    "doc": "An optional timezone string can be provided as the second argument when the date is given as a string.",
    "kind": "constructor",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee",
    "name": "DateRange",
    "signature": "DateRange(start, end, timeZone)",
    "insertText": "DateRange(${1:start}, ${2:end}, ${3:timeZone})",
    "doc": "Creates a DateRange with the given start (inclusive) and end (exclusive), which may be Dates, numbers (interpreted as milliseconds since 1970-01-01T00:00:00Z), or strings (such as '1996-01-01T08:00'). If 'end' is not specified, a 1-millisecond range starting at 'start' is created.",
    "kind": "constructor",
    "returnType": "ee.DateRange"
  },
  {
    "receiver": "ee",
    "name": "Dictionary",
    "signature": "Dictionary(dict)",
    "insertText": "Dictionary(${1:dict})",
    "doc": "Examples are provided for creating ee.Dictionary from various inputs in both JavaScript and Python.",
    "kind": "constructor",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee",
    "name": "ErrorMargin",
    "signature": "ErrorMargin(value, unit)",
    "insertText": "ErrorMargin(${1:value}, ${2:unit})",
    "doc": "A sufficiently large value (e.g., 1e8) will automatically set the unit to 'infinite', while a slightly smaller large value (e.g., 1e7) will retain the 'meters' unit.",
    "kind": "constructor",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Feature",
    "signature": "Feature(geometry, properties)",
    "insertText": "Feature(${1:geometry}, ${2:properties})",
    "doc": "- A computed object: reinterpreted as a geometry if properties are specified, and as a feature if they aren't.",
    "kind": "constructor",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee",
    "name": "FeatureCollection",
    "signature": "FeatureCollection(args, column)",
    "insertText": "FeatureCollection(${1:args}, ${2:column})",
    "doc": "FeatureCollections can be constructed from the following arguments:",
    "kind": "constructor",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee",
    "name": "Filter",
    "signature": "Filter(filter)",
    "insertText": "Filter(${1:filter})",
    "doc": "- A ComputedObject returning a filter. Users shouldn't be making these; they're produced by the generator functions below.",
    "kind": "constructor",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee",
    "name": "Geometry",
    "signature": "Geometry(geoJson, proj, geodesic, evenOdd)",
    "insertText": "Geometry(${1:geoJson}, ${2:proj}, ${3:geodesic}, ${4:evenOdd})",
    "doc": "The function can be used to cast computed geometry objects to the ee.Geometry class to access their methods.",
    "kind": "constructor",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee",
    "name": "Image",
    "signature": "Image(args)",
    "insertText": "Image(${1:args})",
    "doc": "An object to represent an Earth Engine image. This constructor accepts a variety of arguments:",
    "kind": "constructor",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee",
    "name": "ImageCollection",
    "signature": "ImageCollection(args)",
    "insertText": "ImageCollection(${1:args})",
    "doc": "ImageCollections can be constructed from the following arguments:",
    "kind": "constructor",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee",
    "name": "initialize",
    "signature": "initialize(baseurl, tileurl, successCallback, errorCallback, xsrfToken, project)",
    "insertText": "initialize(${1:baseurl}, ${2:tileurl}, ${3:successCallback}, ${4:errorCallback}, ${5:xsrfToken}, ${6:project})",
    "doc": "In Python, this method is named ee.Initialize, with a capital I. Note that some parameters differ between JavaScript and Python. In addition to opt_url and project below, Python also supports: credentials - a google.oauth2.Credentials object or 'persistent' to use stored credentials (the default); http_transport - a httplib2.Http client.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Join",
    "signature": "Join namespace",
    "insertText": "Join",
    "doc": "Namespace: ee.Join",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Kernel",
    "signature": "Kernel namespace",
    "insertText": "Kernel",
    "doc": "Namespace: ee.Kernel",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "List",
    "signature": "List(list)",
    "insertText": "List(${1:list})",
    "doc": "Examples in both JavaScript and Python demonstrate the usage of ee.List with various data types, including empty lists, null, booleans, numbers, strings, and nested lists.",
    "kind": "constructor",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Model",
    "signature": "Model namespace",
    "insertText": "Model",
    "doc": "Namespace: ee.Model",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Number",
    "signature": "Number(number)",
    "insertText": "Number(${1:number})",
    "doc": "The examples demonstrate creating Earth Engine Number objects from various numerical values in both JavaScript and Python.",
    "kind": "constructor",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "PixelType",
    "signature": "PixelType(precision, minValue, maxValue, dimensions)",
    "insertText": "PixelType(${1:precision}, ${2:minValue}, ${3:maxValue}, ${4:dimensions})",
    "doc": "Returns a PixelType of the given precision with the given limits per element, and an optional dimensionality.",
    "kind": "constructor",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee",
    "name": "Projection",
    "signature": "Projection(crs, transform, transformWkt)",
    "insertText": "Projection(${1:crs}, ${2:transform}, ${3:transformWkt})",
    "doc": "An optional transform can be provided either as a 2x3 affine transform matrix in row-major order using the transform argument, or as a WKT string using the transformWkt argument, but not both.",
    "kind": "constructor",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee",
    "name": "Reducer",
    "signature": "Reducer namespace",
    "insertText": "Reducer",
    "doc": "Namespace: ee.Reducer",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "reset",
    "signature": "reset()",
    "insertText": "reset()",
    "doc": "Reset the library to its base state. Useful for re-initializing to a different server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "String",
    "signature": "String(string)",
    "insertText": "String(${1:string})",
    "doc": "Earth Engine Strings can include emoji and can be empty.",
    "kind": "constructor",
    "returnType": null
  },
  {
    "receiver": "ee",
    "name": "Terrain",
    "signature": "Terrain namespace",
    "insertText": "Terrain",
    "doc": "Namespace: ee.Terrain",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "CannyEdgeDetector",
    "signature": "CannyEdgeDetector(image, threshold, sigma)",
    "insertText": "CannyEdgeDetector(${1:image}, ${2:threshold}, ${3:sigma})",
    "doc": "Applies the Canny edge detection algorithm to an image. The output is an image whose bands have the same names as the input bands, and in which non-zero values indicate edges, and the magnitude of the value is the gradient magnitude.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Collection",
    "signature": "Collection(features)",
    "insertText": "Collection(${1:features})",
    "doc": "Returns a Collection containing the specified features.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "CrossCorrelation",
    "signature": "CrossCorrelation(imageA, imageB, maxGap, windowSize, maxMaskedFrac)",
    "insertText": "CrossCorrelation(${1:imageA}, ${2:imageB}, ${3:maxGap}, ${4:windowSize}, ${5:maxMaskedFrac})",
    "doc": "Gives information on the quality of image registration between two (theoretically) co-registered images. The input is two images with the same number of bands. This function outputs an image composed of four bands of information. The first three are distances: the deltaX, deltaY, and the Euclidean distance for each pixel in imageA to the pixel which has the highest corresponding correlation coefficient in imageB. The fourth band is the value of the correlation coefficient for that pixel [-1 : +1].",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Date",
    "signature": "Date(value, timeZone)",
    "insertText": "Date(${1:value}, ${2:timeZone})",
    "doc": "Creates a Date.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Describe",
    "signature": "Describe(input)",
    "insertText": "Describe(${1:input})",
    "doc": "Describes an object using a simple JSON-compatible structure.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Dictionary",
    "signature": "Dictionary(input)",
    "insertText": "Dictionary(${1:input})",
    "doc": "Constructs a dictionary.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Feature",
    "signature": "Feature(geometry, metadata, geometryKey)",
    "insertText": "Feature(${1:geometry}, ${2:metadata}, ${3:geometryKey})",
    "doc": "Returns a Feature composed of the given geometry and metadata.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "FMask",
    "signature": "FMask namespace",
    "insertText": "FMask",
    "doc": "Namespace: ee.Algorithms.FMask",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "GeometryConstructors",
    "signature": "GeometryConstructors namespace",
    "insertText": "GeometryConstructors",
    "doc": "Namespace: ee.Algorithms.GeometryConstructors",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "HillShadow",
    "signature": "HillShadow(image, azimuth, zenith, neighborhoodSize, hysteresis)",
    "insertText": "HillShadow(${1:image}, ${2:azimuth}, ${3:zenith}, ${4:neighborhoodSize}, ${5:hysteresis})",
    "doc": "Creates a shadow band, with output 1 where pixels are illumunated and 0 where they are shadowed. Takes as input an elevation band, azimuth and zenith of the light source in degrees, a neighborhood size, and whether or not to apply hysteresis when a shadow appears. Currently, this algorithm only works for Mercator projections, in which light rays are parallel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "HoughTransform",
    "signature": "HoughTransform(image, gridSize, inputThreshold, lineThreshold, smooth)",
    "insertText": "HoughTransform(${1:image}, ${2:gridSize}, ${3:inputThreshold}, ${4:lineThreshold}, ${5:smooth})",
    "doc": "Applies the Hough transform to an image. For every input band, outputs a band where lines are detected by thresholding the Hough transform with a value of lineThreshold. The output band is named [input]_lines, where [input] is the name of the original band. The defaults provided for the parameters are intended as a starting point for use with UINT8 images.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "If",
    "signature": "If(condition, trueCase, falseCase)",
    "insertText": "If(${1:condition}, ${2:trueCase}, ${3:falseCase})",
    "doc": "The function returns the trueCase object if the condition is true and the falseCase object if the condition is false.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Image",
    "signature": "Image namespace",
    "insertText": "Image",
    "doc": "Namespace: ee.Algorithms.Image",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "IsEqual",
    "signature": "IsEqual(left, right)",
    "insertText": "IsEqual(${1:left}, ${2:right})",
    "doc": "Returns whether two objects are equal.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Landsat",
    "signature": "Landsat namespace",
    "insertText": "Landsat",
    "doc": "Namespace: ee.Algorithms.Landsat",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "ObjectType",
    "signature": "ObjectType(value)",
    "insertText": "ObjectType(${1:value})",
    "doc": "Examples demonstrate its usage in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "ProjectionTransform",
    "signature": "ProjectionTransform(feature, proj, maxError)",
    "insertText": "ProjectionTransform(${1:feature}, ${2:proj}, ${3:maxError})",
    "doc": "Transforms the geometry of a feature to a specific projection.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Sentinel2",
    "signature": "Sentinel2 namespace",
    "insertText": "Sentinel2",
    "doc": "Namespace: ee.Algorithms.Sentinel2",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "String",
    "signature": "String(input)",
    "insertText": "String(${1:input})",
    "doc": "Converts the input to a string.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "TemporalSegmentation",
    "signature": "TemporalSegmentation namespace",
    "insertText": "TemporalSegmentation",
    "doc": "Namespace: ee.Algorithms.TemporalSegmentation",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms",
    "name": "Terrain",
    "signature": "Terrain(input)",
    "insertText": "Terrain(${1:input})",
    "doc": "Expects an image containing either a single band of elevation, measured in meters, or if there's more than one band, one named 'elevation'. Adds output bands named 'slope' and 'aspect' measured in degrees plus an unsigned byte output band named 'hillshade' for visualization. All other bands and metadata are copied from the input image. The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.FMask",
    "name": "fillMinima",
    "signature": "fillMinima(image, borderValue, neighborhood)",
    "insertText": "fillMinima(${1:image}, ${2:borderValue}, ${3:neighborhood})",
    "doc": "Fills local minima. Only works on INT types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.FMask",
    "name": "matchClouds",
    "signature": "matchClouds(input, cloud, shadow, btemp, sceneLow, sceneHigh, neighborhood)",
    "insertText": "matchClouds(${1:input}, ${2:cloud}, ${3:shadow}, ${4:btemp}, ${5:sceneLow}, ${6:sceneHigh}, ${7:neighborhood})",
    "doc": "Runs the FMask cloud and shadow matching. Outputs a single band ('csm'), containing the computed cloud and shadow masks.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "BBox",
    "signature": "BBox(west, south, east, north)",
    "insertText": "BBox(${1:west}, ${2:south}, ${3:east}, ${4:north})",
    "doc": "If (east - west) �� 360 then the longitude range will be normalized to -180 to +180; otherwise they will be treated as designating points on a circle (e.g., east may be numerically less than west).",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "LinearRing",
    "signature": "LinearRing(coordinates, crs, geodesic, maxError)",
    "insertText": "LinearRing(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:maxError})",
    "doc": "Constructs a LinearRing from the given coordinates, automatically adding the first point at the end if the ring is not explicitly closed.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "LineString",
    "signature": "LineString(coordinates, crs, geodesic, maxError)",
    "insertText": "LineString(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:maxError})",
    "doc": "Constructs a LineString from the given coordinates.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "MultiGeometry",
    "signature": "MultiGeometry(geometries, crs, geodesic, maxError)",
    "insertText": "MultiGeometry(${1:geometries}, ${2:crs}, ${3:geodesic}, ${4:maxError})",
    "doc": "Constructs a MultiGeometry from the given list of geometry elements.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "MultiLineString",
    "signature": "MultiLineString(coordinates, crs, geodesic, maxError)",
    "insertText": "MultiLineString(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:maxError})",
    "doc": "Constructs a MultiLineString from the given coordinates.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "MultiPoint",
    "signature": "MultiPoint(coordinates, crs)",
    "insertText": "MultiPoint(${1:coordinates}, ${2:crs})",
    "doc": "Constructs a MultiPoint from the given coordinates.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "MultiPolygon",
    "signature": "MultiPolygon(coordinates, crs, geodesic, maxError, evenOdd)",
    "insertText": "MultiPolygon(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:maxError}, ${5:evenOdd})",
    "doc": "Constructs a MultiPolygon from the given coordinates.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "Point",
    "signature": "Point(coordinates, crs)",
    "insertText": "Point(${1:coordinates}, ${2:crs})",
    "doc": "Constructs a new Point from the given x,y coordinates.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "Polygon",
    "signature": "Polygon(coordinates, crs, geodesic, maxError, evenOdd)",
    "insertText": "Polygon(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:maxError}, ${5:evenOdd})",
    "doc": "The geodesic argument determines if edges are straight or follow the shortest path on Earth's surface.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.GeometryConstructors",
    "name": "Rectangle",
    "signature": "Rectangle(coordinates, crs, geodesic, evenOdd)",
    "insertText": "Rectangle(${1:coordinates}, ${2:crs}, ${3:geodesic}, ${4:evenOdd})",
    "doc": "Constructs a rectangular polygon from the given corner points.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Algorithms.Image",
    "name": "Segmentation",
    "signature": "Segmentation namespace",
    "insertText": "Segmentation",
    "doc": "Namespace: ee.Algorithms.Image.Segmentation",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ee.Algorithms.Image.Segmentation",
    "name": "GMeans",
    "signature": "GMeans(image, numIterations, pValue, neighborhoodSize, gridSize, uniqueLabels)",
    "insertText": "GMeans(${1:image}, ${2:numIterations}, ${3:pValue}, ${4:neighborhoodSize}, ${5:gridSize}, ${6:uniqueLabels})",
    "doc": "Performs G-Means clustering on the input image. Iteratively applies k-means followed by a normality test to automatically determine the number of clusters to use. The output contains a 'clusters' band containing the integer ID of the cluster that each pixel belongs to. The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap. Clusters in one cell or tile are unrelated to clusters in another. Any cluster that spans a cell or tile boundary may receive two different labels in the two halves. Any input pixels with partial masks are fully masked in the output. This algorithm is only expected to perform well for images with a narrow dynamic range (i.e., bytes or shorts).",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Image.Segmentation",
    "name": "KMeans",
    "signature": "KMeans(image, numClusters, numIterations, neighborhoodSize, gridSize, forceConvergence, uniqueLabels)",
    "insertText": "KMeans(${1:image}, ${2:numClusters}, ${3:numIterations}, ${4:neighborhoodSize}, ${5:gridSize}, ${6:forceConvergence}, ${7:uniqueLabels})",
    "doc": "Performs K-Means clustering on the input image. Outputs a 1-band image containing the ID of the cluster that each pixel belongs to. The algorithm can work either on a fixed grid of non-overlapping cells (gridSize, which can be smaller than a tile) or on tiles with overlap (neighborhoodSize). The default is to use tiles with no overlap. Clusters in one cell or tile are unrelated to clusters in another. Any cluster that spans a cell or tile boundary may receive two different labels in the two halves. Any input pixels with partial masks are fully masked in the output.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Image.Segmentation",
    "name": "seedGrid",
    "signature": "seedGrid(size, gridType)",
    "insertText": "seedGrid(${1:size}, ${2:gridType})",
    "doc": "Selects seed pixels for clustering.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Image.Segmentation",
    "name": "SNIC",
    "signature": "SNIC(image, size, compactness, connectivity, neighborhoodSize, seeds)",
    "insertText": "SNIC(${1:image}, ${2:size}, ${3:compactness}, ${4:connectivity}, ${5:neighborhoodSize}, ${6:seeds})",
    "doc": "Superpixel clustering based on SNIC (Simple Non-Iterative Clustering). Outputs a band of cluster IDs and the per-cluster averages for each of the input bands. If the 'seeds' image isn't provided as input, the output will include a 'seeds' band containing the generated seed locations. See: Achanta, Radhakrishna and Susstrunk, Sabine, 'Superpixels and Polygons using Simple Non-Iterative Clustering', CVPR, 2017.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Landsat",
    "name": "calibratedRadiance",
    "signature": "calibratedRadiance(image)",
    "insertText": "calibratedRadiance(${1:image})",
    "doc": "Calibrates each band of an image by applying linear transformation with slope RADIANCE_MULT_BAND_N and y-intercept RADIANCE_ADD_BAND_N ; these values are extracted from the image metadata.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Landsat",
    "name": "pathRowLimit",
    "signature": "pathRowLimit(collection, maxScenesPerPathRow, maxScenesTotal)",
    "insertText": "pathRowLimit(${1:collection}, ${2:maxScenesPerPathRow}, ${3:maxScenesTotal})",
    "doc": "Limits requests to an ImageCollection of Landsat scenes to return a controllable number of the best scenes for each request. This is intended for use with statistical algorithms like median composites that need a certain amount of good data to perform well, but that do not benefit substantially from additional data beyond that while becoming needlessly expensive. The default arguments select approximately one year's worth of good data.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.Algorithms.Landsat",
    "name": "simpleCloudScore",
    "signature": "simpleCloudScore(image)",
    "insertText": "simpleCloudScore(${1:image})",
    "doc": "Computes a simple cloud-likelihood score in the range [0,100] using a combination of brightness, temperature, and NDSI. This is not a robust cloud detector, and is intended mainly to compare multiple looks at the same point for relative cloud likelihood.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Landsat",
    "name": "simpleComposite",
    "signature": "simpleComposite(collection, percentile, cloudScoreRange, maxDepth, asFloat)",
    "insertText": "simpleComposite(${1:collection}, ${2:percentile}, ${3:cloudScoreRange}, ${4:maxDepth}, ${5:asFloat})",
    "doc": "Computes a Landsat TOA composite from a collection of raw Landsat scenes. It applies standard TOA calibration and then assigns a cloud score to each pixel using the SimpleLandsatCloudScore algorithm. It selects the lowest possible range of cloud scores at each point and then computes per-band percentile values from the accepted pixels. This algorithm also uses the LandsatPathRowLimit algorithm to select only the least-cloudy scenes in regions where more than maxDepth input scenes are available.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Landsat",
    "name": "TOA",
    "signature": "TOA(input)",
    "insertText": "TOA(${1:input})",
    "doc": "Calibrates Landsat DN to TOA reflectance and brightness temperature for Landsat and similar data. For recently-acquired scenes calibration coefficients are extracted from the image metadata; for older scenes the coefficients are derived from:",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.Sentinel2",
    "name": "CDI",
    "signature": "CDI(source)",
    "insertText": "CDI(${1:source})",
    "doc": "See Frantz, D., Hass, E., Uhl, A., Stoffels, J., & Hill, J. (2018). Improvement of the Fmask algorithm for Sentinel-2 images: Separating clouds from bright surfaces based on parallax effects. Remote sensing of environment, 215, 471-481.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "C2c",
    "signature": "C2c(collection, dateFormat, maxError, maxSegments, startYear, endYear, infill, spikesTolerance, includePostMetrics, includeRegrowth, useRelativeRegrowth, negativeMagnitudeOnly)",
    "insertText": "C2c(${1:collection}, ${2:dateFormat}, ${3:maxError}, ${4:maxSegments}, ${5:startYear}, ${6:endYear}, ${7:infill}, ${8:spikesTolerance}, ${9:includePostMetrics}, ${10:includeRegrowth}, ${11:useRelativeRegrowth}, ${12:negativeMagnitudeOnly})",
    "doc": "Citation: Txomin Hermosilla, Michael A. Wulder, Joanne C. White, Nicholas C. Coops, Daniel Coelho, Giovanni Ciatto, Noel Gorelick, and Saverio Francini. In preparation. Image compositing, time-series change detection and temporal metrics: Implementation of the Composite2Change (C2C) algorithm on Google Earth Engine. This algorithm is in preview and is subject to change.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "Ccdc",
    "signature": "Ccdc(collection, breakpointBands, tmaskBands, minObservations, chiSquareProbability, minNumOfYearsScaler, dateFormat, lambda, maxIterations)",
    "insertText": "Ccdc(${1:collection}, ${2:breakpointBands}, ${3:tmaskBands}, ${4:minObservations}, ${5:chiSquareProbability}, ${6:minNumOfYearsScaler}, ${7:dateFormat}, ${8:lambda}, ${9:maxIterations})",
    "doc": "Implements the Continuous Change Detection and Classification temporal breakpoint algorithm. This algorithm finds temporal breakpoints in an image collection by iteratively fitting harmonic functions to the data. Fit coefficients are produced for all input bands, but the bands used for breakpoint detection can be specified with the 'breakpointBands' argument.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "Ewmacd",
    "signature": "Ewmacd(timeSeries, vegetationThreshold, trainingStartYear, trainingEndYear, harmonicCount, xBarLimit1, xBarLimit2, lambda, lambdasigs, rounding, persistence)",
    "insertText": "Ewmacd(${1:timeSeries}, ${2:vegetationThreshold}, ${3:trainingStartYear}, ${4:trainingEndYear}, ${5:harmonicCount}, ${6:xBarLimit1}, ${7:xBarLimit2}, ${8:lambda}, ${9:lambdasigs}, ${10:rounding}, ${11:persistence})",
    "doc": "Exponentially Weighted Moving Average Change Detection. This algorithm computes a harmonic model for the 'training' portion of the input data and subtracts that from the original results. The residuals are then subjected to Shewhart X-bar charts and an exponentially weighted moving average. Disturbed pixels are indicated when the charts signal a deviation from the given control limits.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "LandTrendr",
    "signature": "LandTrendr(timeSeries, maxSegments, spikeThreshold, vertexCountOvershoot, preventOneYearRecovery, recoveryThreshold, pvalThreshold, bestModelProportion, minObservationsNeeded)",
    "insertText": "LandTrendr(${1:timeSeries}, ${2:maxSegments}, ${3:spikeThreshold}, ${4:vertexCountOvershoot}, ${5:preventOneYearRecovery}, ${6:recoveryThreshold}, ${7:pvalThreshold}, ${8:bestModelProportion}, ${9:minObservationsNeeded})",
    "doc": "Landsat-based detection of Trends in Disturbance and Recovery: temporally segments a time-series of images by extracting the spectral trajectories of change over time. The first band of each image is used to find breakpoints, and those breakpoints are used to perform fitting on all subsequent bands. The breakpoints are returned as a 2-D matrix of 4 rows and as many columns as images. The first two rows are the original X and Y values. The third row contains the Y values fitted to the estimated segments, and the 4th row contains a 1 if the corresponding point was used as a segment vertex or 0 if not. Any additional fitted bands are appended as rows in the output. Breakpoint fitting assumes that increasing values represent disturbance and decreasing values represent recovery.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "LandTrendrFit",
    "signature": "LandTrendrFit(timeSeries, vertices, spikeThreshold, minObservationsNeeded)",
    "insertText": "LandTrendrFit(${1:timeSeries}, ${2:vertices}, ${3:spikeThreshold}, ${4:minObservationsNeeded})",
    "doc": "Interpolates a time series using a set of LandTrendr breakpoint years. For each input band in the timeSeries, outputs a new 1D array-valued band containing the input values interpolated between the breakpoint times identified by the vertices image. See the LandTrendr Algorithm for more details.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "StructuralChangeBreakpoints",
    "signature": "StructuralChangeBreakpoints(collection, breakpointBand, seasonalModelOrder, minSpacing, maxBreaks, dateFormat)",
    "insertText": "StructuralChangeBreakpoints(${1:collection}, ${2:breakpointBand}, ${3:seasonalModelOrder}, ${4:minSpacing}, ${5:maxBreaks}, ${6:dateFormat})",
    "doc": ". rmse_BANDNAME : there will be one such output band per input band. This holds a 1D array, with one entry per segment. The value for each segment is the RMSE for the linear fit residuals for that segment.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "VCT",
    "signature": "VCT(timeSeries, landCover, maxUd, minNdvi, forThrMax, nYears)",
    "insertText": "VCT(${1:timeSeries}, ${2:landCover}, ${3:maxUd}, ${4:minNdvi}, ${5:forThrMax}, ${6:nYears})",
    "doc": "See: Huang, C., Goward, S.N., Masek, J.G., Thomas, N., Zhu, Z. and Vogelmann, J.E., 2010. An automated approach for reconstructing recent forest disturbance history using dense Landsat time series stacks. Remote Sensing of Environment, 114(1), pp.183-198.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Algorithms.TemporalSegmentation",
    "name": "Verdet",
    "signature": "Verdet(timeSeries, tolerance, alpha, nRuns)",
    "insertText": "Verdet(${1:timeSeries}, ${2:tolerance}, ${3:alpha}, ${4:nRuns})",
    "doc": "Vegetation Regeneration and Disturbance Estimates through Time, forest change detection algorithm. This algorithm generates a yearly clear-sky composite from satellite imagery, calculates a spectral vegetation index for each pixel in that composite, spatially segments the vegetation index image into patches, temporally divides the time series into differently sloped segments, and then labels those segments as disturbed, stable, or regenerating. Segmentation at both the spatial and temporal steps are performed using total variation regularization.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Array",
    "name": "abs",
    "signature": "abs()",
    "insertText": "abs()",
    "doc": "On an element-wise basis, computes the absolute value of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "accum",
    "signature": "accum(axis, reducer)",
    "insertText": "accum(${1:axis}, ${2:reducer})",
    "doc": "Accumulates elements of an array along the given axis, by setting each element of the result to the reduction of elements along that axis up to and including the current position. May be used to make a cumulative sum, a monotonically increasing sequence, etc.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "acos",
    "signature": "acos()",
    "insertText": "acos()",
    "doc": "On an element-wise basis, computes the arccosine in radians of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "add",
    "signature": "add(right)",
    "insertText": "add(${1:right})",
    "doc": "On an element-wise basis, adds the first value to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "and",
    "signature": "and(right)",
    "insertText": "and(${1:right})",
    "doc": "On an element-wise basis, returns 1 if and only if both values are non-zero.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "argmax",
    "signature": "argmax()",
    "insertText": "argmax()",
    "doc": "Returns the position, as a list of indices in each array axis, of the maximum value in an array, or null if the array is empty. If there are multiple occurrences of the maximum, returns the position of the first.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "asin",
    "signature": "asin()",
    "insertText": "asin()",
    "doc": "The provided examples demonstrate how to use Array.asin() in both JavaScript and Python, including plotting the function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "atan",
    "signature": "atan()",
    "insertText": "atan()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the usage and plotting of the atan() function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "atan2",
    "signature": "atan2(right)",
    "insertText": "atan2(${1:right})",
    "doc": "On an element-wise basis, calculates the angle formed by the 2D vector [x, y].",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitCount",
    "signature": "bitCount()",
    "insertText": "bitCount()",
    "doc": "The examples demonstrate how bitCount() works for various integer values, including positive, negative, and multi-dimensional arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitsToArray",
    "signature": "bitsToArray(input)",
    "insertText": "bitsToArray(${1:input})",
    "doc": "Converts the bits of an integer to an Array. The array has as many elements as the position of the highest set bit, or a single 0 for a value of 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitwiseAnd",
    "signature": "bitwiseAnd(right)",
    "insertText": "bitwiseAnd(${1:right})",
    "doc": "Both the left-hand ( this ) and right-hand ( right ) arguments must be arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitwiseNot",
    "signature": "bitwiseNot()",
    "insertText": "bitwiseNot()",
    "doc": "On an element-wise basis, calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitwiseOr",
    "signature": "bitwiseOr(right)",
    "insertText": "bitwiseOr(${1:right})",
    "doc": "The examples demonstrate the bitwise OR operation with various integer inputs, including positive, negative, and hexadecimal values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "bitwiseXor",
    "signature": "bitwiseXor(right)",
    "insertText": "bitwiseXor(${1:right})",
    "doc": "On an element-wise basis, calculates the bitwise XOR of the input values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "byte",
    "signature": "byte()",
    "insertText": "byte()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "cat",
    "signature": "cat(arrays, axis)",
    "insertText": "cat(${1:arrays}, ${2:axis})",
    "doc": "Concatenates multiple arrays into a single array along the given axis. Each array must have the same dimensionality and the same length on all axes except the concatenation axis.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "cbrt",
    "signature": "cbrt()",
    "insertText": "cbrt()",
    "doc": "The examples demonstrate how to use Array.cbrt() with various array inputs in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "ceil",
    "signature": "ceil()",
    "insertText": "ceil()",
    "doc": "On an element-wise basis, computes the smallest integer greater than or equal to the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "cos",
    "signature": "cos()",
    "insertText": "cos()",
    "doc": "On an element-wise basis, computes the cosine of the input in radians.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "cosh",
    "signature": "cosh()",
    "insertText": "cosh()",
    "doc": "On an element-wise basis, computes the hyperbolic cosine of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "cut",
    "signature": "cut(position)",
    "insertText": "cut(${1:position})",
    "doc": "The output array will have the same dimensions as the input, with a length of 1 on each axis that was not -1 in the position list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "digamma",
    "signature": "digamma()",
    "insertText": "digamma()",
    "doc": "Examples show computing the digamma function for scalar and array inputs in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "divide",
    "signature": "divide(right)",
    "insertText": "divide(${1:right})",
    "doc": "Examples in JavaScript and Python demonstrate various division operations with different inputs, including division by zero, scalars, and other arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "dotProduct",
    "signature": "dotProduct(array2)",
    "insertText": "dotProduct(${1:array2})",
    "doc": "Takes two arrays as input and returns a single number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "double",
    "signature": "double()",
    "insertText": "double()",
    "doc": "On an element-wise basis, casts the input value to a 64-bit float.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "eigen",
    "signature": "eigen()",
    "insertText": "eigen()",
    "doc": "Computes the real eigenvectors and eigenvalues of a square 2D array of A rows and A columns. Returns an array with A rows and A+1 columns, where each row contains an eigenvalue in the first column, and the corresponding eigenvector in the remaining A columns. The rows are sorted by eigenvalue, in descending order.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "eq",
    "signature": "eq(right)",
    "insertText": "eq(${1:right})",
    "doc": "On an element-wise basis, returns 1 if and only if the first value is equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "erf",
    "signature": "erf()",
    "insertText": "erf()",
    "doc": "Examples are provided in both JavaScript and Python, demonstrating how to use the erf() method and visualize the results.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "erfc",
    "signature": "erfc()",
    "insertText": "erfc()",
    "doc": "The Array.erfc() method computes the complementary error function for each element in an input array and returns an array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "erfcInv",
    "signature": "erfcInv()",
    "insertText": "erfcInv()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the erfcInv() method and visualize its output.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "erfInv",
    "signature": "erfInv()",
    "insertText": "erfInv()",
    "doc": "The method can be used in both JavaScript and Python environments, as shown in the provided examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "exp",
    "signature": "exp()",
    "insertText": "exp()",
    "doc": "On an element-wise basis, computes the Euler's number e raised to the power of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "first",
    "signature": "first(right)",
    "insertText": "first(${1:right})",
    "doc": "Both the left-hand and right-hand values are expected to be Arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "firstNonZero",
    "signature": "firstNonZero(right)",
    "insertText": "firstNonZero(${1:right})",
    "doc": "On an element-wise basis, selects the first value if it is non-zero, and the second value otherwise.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "float",
    "signature": "float()",
    "insertText": "float()",
    "doc": "On an element-wise basis, casts the input value to a 32-bit float.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "floor",
    "signature": "floor()",
    "insertText": "floor()",
    "doc": "On an element-wise basis, computes the largest integer less than or equal to the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "gamma",
    "signature": "gamma()",
    "insertText": "gamma()",
    "doc": "On an element-wise basis, computes the gamma function of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "gammainc",
    "signature": "gammainc(right)",
    "insertText": "gammainc(${1:right})",
    "doc": "On an element-wise basis, calculates the regularized lower incomplete Gamma function ��(x,a).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "get",
    "signature": "get(position)",
    "insertText": "get(${1:position})",
    "doc": "The function returns a Number, which is the value found at the given position.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "gt",
    "signature": "gt(right)",
    "insertText": "gt(${1:right})",
    "doc": "The examples demonstrate how the method returns 0 or 1 based on whether the left-hand value is greater than the right-hand value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "gte",
    "signature": "gte(right)",
    "insertText": "gte(${1:right})",
    "doc": "On an element-wise basis, returns 1 if and only if the first value is greater than or equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "hypot",
    "signature": "hypot(right)",
    "insertText": "hypot(${1:right})",
    "doc": "On an element-wise basis, calculates the magnitude of the 2D vector [x, y].",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "identity",
    "signature": "identity(size)",
    "insertText": "identity(${1:size})",
    "doc": "Examples demonstrate how to use ee.Array.identity in JavaScript and Python, showing the output for various sizes including 0, 1, 2, and 3.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "int",
    "signature": "int()",
    "insertText": "int()",
    "doc": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "int16",
    "signature": "int16()",
    "insertText": "int16()",
    "doc": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "int32",
    "signature": "int32()",
    "insertText": "int32()",
    "doc": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "int64",
    "signature": "int64()",
    "insertText": "int64()",
    "doc": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "int8",
    "signature": "int8()",
    "insertText": "int8()",
    "doc": "On an element-wise basis, casts the input value to a signed 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "lanczos",
    "signature": "lanczos()",
    "insertText": "lanczos()",
    "doc": "On an element-wise basis, computes the Lanczos approximation of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "leftShift",
    "signature": "leftShift(right)",
    "insertText": "leftShift(${1:right})",
    "doc": "On an element-wise basis, calculates the left shift of v1 by v2 bits.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "length",
    "signature": "length()",
    "insertText": "length()",
    "doc": "Returns a 1-D ee.Array containing the length of each dimension of the given ee.Array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "log",
    "signature": "log()",
    "insertText": "log()",
    "doc": "The method returns an Array containing the natural logarithms of the input array's elements.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "log10",
    "signature": "log10()",
    "insertText": "log10()",
    "doc": "The input this: input argument is the Array for which the base-10 logarithm is calculated.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "long",
    "signature": "long()",
    "insertText": "long()",
    "doc": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "lt",
    "signature": "lt(right)",
    "insertText": "lt(${1:right})",
    "doc": "Examples in JavaScript and Python demonstrate the function's behavior with different array inputs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "lte",
    "signature": "lte(right)",
    "insertText": "lte(${1:right})",
    "doc": "On an element-wise basis, returns 1 if and only if the first value is less than or equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "mask",
    "signature": "mask(mask)",
    "insertText": "mask(${1:mask})",
    "doc": "Creates a subarray by slicing out each position in an input array that is parallel to a non-zero element of the given mask array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixCholeskyDecomposition",
    "signature": "matrixCholeskyDecomposition()",
    "insertText": "matrixCholeskyDecomposition()",
    "doc": "Calculates the Cholesky decomposition of a matrix. The Cholesky decomposition is a decomposition into the form L * L' where L is a lower triangular matrix. The input must be a symmetric positive-definite matrix. Returns a dictionary with 1 entry named 'L'.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Array",
    "name": "matrixDeterminant",
    "signature": "matrixDeterminant()",
    "insertText": "matrixDeterminant()",
    "doc": "Computes the determinant of the matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixDiagonal",
    "signature": "matrixDiagonal()",
    "insertText": "matrixDiagonal()",
    "doc": "Computes the diagonal of the matrix in a single column.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixFnorm",
    "signature": "matrixFnorm()",
    "insertText": "matrixFnorm()",
    "doc": "Computes the Frobenius norm of the matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixInverse",
    "signature": "matrixInverse()",
    "insertText": "matrixInverse()",
    "doc": "Computes the inverse of the matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixLUDecomposition",
    "signature": "matrixLUDecomposition()",
    "insertText": "matrixLUDecomposition()",
    "doc": "Calculates the LU matrix decomposition such that P��input=L��U, where L is lower triangular (with unit diagonal terms), U is upper triangular and P is a partial pivot permutation matrix. The input matrix must be square. Returns a dictionary with entries named 'L', 'U' and 'P'.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Array",
    "name": "matrixMultiply",
    "signature": "matrixMultiply(right)",
    "insertText": "matrixMultiply(${1:right})",
    "doc": "Returns the matrix multiplication A * B.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixPseudoInverse",
    "signature": "matrixPseudoInverse()",
    "insertText": "matrixPseudoInverse()",
    "doc": "Computes the Moore-Penrose pseudoinverse of the matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixQRDecomposition",
    "signature": "matrixQRDecomposition()",
    "insertText": "matrixQRDecomposition()",
    "doc": "Calculates the QR-decomposition of a matrix into two matrices Q and R such that input = QR, where Q is orthogonal, and R is upper triangular. Returns a dictionary with entries named 'Q' and 'R'.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Array",
    "name": "matrixSingularValueDecomposition",
    "signature": "matrixSingularValueDecomposition()",
    "insertText": "matrixSingularValueDecomposition()",
    "doc": "Calculates the Singular Value Decomposition of the input matrix into U��S��V', such that U and V are orthogonal and S is diagonal. Returns a dictionary with entries named 'U', 'S' and 'V'.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Array",
    "name": "matrixSolve",
    "signature": "matrixSolve(right)",
    "insertText": "matrixSolve(${1:right})",
    "doc": "Solves for x in the matrix equation A * x = B, finding a least-squares solution if A is overdetermined.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixToDiag",
    "signature": "matrixToDiag()",
    "insertText": "matrixToDiag()",
    "doc": "Computes a square diagonal matrix from a single column matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixTrace",
    "signature": "matrixTrace()",
    "insertText": "matrixTrace()",
    "doc": "Computes the trace of the matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "matrixTranspose",
    "signature": "matrixTranspose(axis1, axis2)",
    "insertText": "matrixTranspose(${1:axis1}, ${2:axis2})",
    "doc": "Transposes two dimensions of an array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "max",
    "signature": "max(right)",
    "insertText": "max(${1:right})",
    "doc": "The returned array contains the maximum value at each corresponding position from the input arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "min",
    "signature": "min(right)",
    "insertText": "min(${1:right})",
    "doc": "Examples in both JavaScript and Python demonstrate the element-wise minimum selection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "mod",
    "signature": "mod(right)",
    "insertText": "mod(${1:right})",
    "doc": "On an element-wise basis, calculates the remainder of the first value divided by the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "multiply",
    "signature": "multiply(right)",
    "insertText": "multiply(${1:right})",
    "doc": "The method returns a new Array containing the results of the multiplication.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "neq",
    "signature": "neq(right)",
    "insertText": "neq(${1:right})",
    "doc": "On an element-wise basis, returns 1 if and only if the first value is not equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "not",
    "signature": "not()",
    "insertText": "not()",
    "doc": "Examples in JavaScript and Python demonstrate the function's behavior with various array inputs, including an empty array and arrays with zero, non-zero, and a mix of values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "or",
    "signature": "or(right)",
    "insertText": "or(${1:right})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the use of Array.or .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "pad",
    "signature": "pad(lengths, pad)",
    "insertText": "pad(${1:lengths}, ${2:pad})",
    "doc": "Pad an array to a given length. The pad value will be repeatedly appended to the array to extend it to given length along each axis. If the array is already as large or larger than a given length, it will remain unchanged along that axis.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "pow",
    "signature": "pow(right)",
    "insertText": "pow(${1:right})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the use of Array.pow with various inputs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "project",
    "signature": "project(axes)",
    "insertText": "project(${1:axes})",
    "doc": "Projects an array to a lower dimensional space by specifying the axes to retain. Dropped axes must be at most length 1.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "reduce",
    "signature": "reduce(reducer, axes, fieldAxis)",
    "insertText": "reduce(${1:reducer}, ${2:axes}, ${3:fieldAxis})",
    "doc": "Apply a reducer to an array by collapsing all the input values along each specified axis into a single output value computed by the reducer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "repeat",
    "signature": "repeat(axis, copies)",
    "insertText": "repeat(${1:axis}, ${2:copies})",
    "doc": "Repeats the array along the given axis. The result will have the shape of the input, except length along the repeated axis will be multiplied by the given number of copies.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "reshape",
    "signature": "reshape(shape)",
    "insertText": "reshape(${1:shape})",
    "doc": "Reshapes an array to a new list of dimension lengths.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "rightShift",
    "signature": "rightShift(right)",
    "insertText": "rightShift(${1:right})",
    "doc": "On an element-wise basis, calculates the signed right shift of v1 by v2 bits.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "round",
    "signature": "round()",
    "insertText": "round()",
    "doc": "On an element-wise basis, computes the integer nearest to the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "short",
    "signature": "short()",
    "insertText": "short()",
    "doc": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "signum",
    "signature": "signum()",
    "insertText": "signum()",
    "doc": "On an element-wise basis, computes the signum function (sign) of the input; 0 if the input is 0, 1 if the input is greater than 0, -1 if the input is less than 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "sin",
    "signature": "sin()",
    "insertText": "sin()",
    "doc": "On an element-wise basis, computes the sine of the input in radians.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "sinh",
    "signature": "sinh()",
    "insertText": "sinh()",
    "doc": "On an element-wise basis, computes the hyperbolic sine of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "slice",
    "signature": "slice(axis, start, end, step)",
    "insertText": "slice(${1:axis}, ${2:start}, ${3:end}, ${4:step})",
    "doc": "Creates a subarray by slicing out each position along the given axis from the 'start' (inclusive) to 'end' (exclusive) by increments of 'step'. The result will have as many dimensions as the input, and the same length in all directions except the slicing axis, where the length will be the number of positions from 'start' to 'end' by 'step' that are in range of the input array's length along 'axis'. This means the result can be length 0 along the given axis if start=end, or if the start or end values are entirely out of range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "sort",
    "signature": "sort(keys)",
    "insertText": "sort(${1:keys})",
    "doc": "Sorts elements of the array along one axis.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "sqrt",
    "signature": "sqrt()",
    "insertText": "sqrt()",
    "doc": "On an element-wise basis, computes the square root of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "subtract",
    "signature": "subtract(right)",
    "insertText": "subtract(${1:right})",
    "doc": "The examples demonstrate subtraction with single-element arrays, multi-element arrays, and empty arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "tan",
    "signature": "tan()",
    "insertText": "tan()",
    "doc": "Examples demonstrate the usage in JavaScript and Python, including plotting the tangent function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "tanh",
    "signature": "tanh()",
    "insertText": "tanh()",
    "doc": "Examples demonstrate its usage in both JavaScript and Python, including plotting the results.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toByte",
    "signature": "toByte()",
    "insertText": "toByte()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toDouble",
    "signature": "toDouble()",
    "insertText": "toDouble()",
    "doc": "On an element-wise basis, casts the input value to a 64-bit float.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toFloat",
    "signature": "toFloat()",
    "insertText": "toFloat()",
    "doc": "On an element-wise basis, casts the input value to a 32-bit float.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toInt",
    "signature": "toInt()",
    "insertText": "toInt()",
    "doc": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toInt16",
    "signature": "toInt16()",
    "insertText": "toInt16()",
    "doc": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toInt32",
    "signature": "toInt32()",
    "insertText": "toInt32()",
    "doc": "On an element-wise basis, casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toInt64",
    "signature": "toInt64()",
    "insertText": "toInt64()",
    "doc": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toInt8",
    "signature": "toInt8()",
    "insertText": "toInt8()",
    "doc": "On an element-wise basis, casts the input value to a signed 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toList",
    "signature": "toList()",
    "insertText": "toList()",
    "doc": "Turns an Array into a list of lists of numbers.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toLong",
    "signature": "toLong()",
    "insertText": "toLong()",
    "doc": "On an element-wise basis, casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toShort",
    "signature": "toShort()",
    "insertText": "toShort()",
    "doc": "On an element-wise basis, casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toUint16",
    "signature": "toUint16()",
    "insertText": "toUint16()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toUint32",
    "signature": "toUint32()",
    "insertText": "toUint32()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "toUint8",
    "signature": "toUint8()",
    "insertText": "toUint8()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "transpose",
    "signature": "transpose(axis1, axis2)",
    "insertText": "transpose(${1:axis1}, ${2:axis2})",
    "doc": "Transposes two dimensions of an array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "trigamma",
    "signature": "trigamma()",
    "insertText": "trigamma()",
    "doc": "On an element-wise basis, computes the trigamma function of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "uint16",
    "signature": "uint16()",
    "insertText": "uint16()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 16-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "uint32",
    "signature": "uint32()",
    "insertText": "uint32()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 32-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Array",
    "name": "uint8",
    "signature": "uint8()",
    "insertText": "uint8()",
    "doc": "On an element-wise basis, casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Blob",
    "name": "string",
    "signature": "string(encoding)",
    "insertText": "string(${1:encoding})",
    "doc": "The method can be used to parse data from various sources, such as Google Cloud Storage, as demonstrated in the examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Blob",
    "name": "url",
    "signature": "url()",
    "insertText": "url()",
    "doc": "Returns the Blob's Google Cloud Storage URL. The bucket metadata must be accessible (requires the storage.buckets.get permission which is provided by the role \"Storage Legacy Bucket Reader\" among others, see https://cloud.google.com/storage/docs/access-control/iam-roles) and the bucket must be located in the US multi-region, a dual-region including US-CENTRAL1, or theUS-CENTRAL1 region.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Classifier",
    "name": "amnhMaxent",
    "signature": "amnhMaxent(categoricalNames, outputFormat, autoFeature, linear, quadratic, product, threshold, hinge, hingeThreshold, l2lqThreshold, lq2lqptThreshold, addSamplesToBackground, addAllSamplesToBackground, betaMultiplier, betaHinge, betaLqp, betaCategorical, betaThreshold, extrapolate, doClamp, writeClampGrid, randomTestPoints, seed)",
    "insertText": "amnhMaxent(${1:categoricalNames}, ${2:outputFormat}, ${3:autoFeature}, ${4:linear}, ${5:quadratic}, ${6:product}, ${7:threshold}, ${8:hinge}, ${9:hingeThreshold}, ${10:l2lqThreshold}, ${11:lq2lqptThreshold}, ${12:addSamplesToBackground}, ${13:addAllSamplesToBackground}, ${14:betaMultiplier}, ${15:betaHinge}, ${16:betaLqp}, ${17:betaCategorical}, ${18:betaThreshold}, ${19:extrapolate}, ${20:doClamp}, ${21:writeClampGrid}, ${22:randomTestPoints}, ${23:seed})",
    "doc": "Creates a Maximum Entropy classifier. Maxent is used to model species distribution probabilities using environmental data for locations of known presence and for a large number of 'background' locations. For more information and to cite, see: https://biodiversityinformatics.amnh.org/open_source/maxent/ and the reference publication: Phillips, et. al., 2004 A maximum entropy approach to species distribution modeling, Proceedings of the Twenty-First International Conference on Machine Learning. The output is a single band named 'probability', containing the modeled probability, and an additional band named 'clamp' when the 'writeClampGrid' argument is true.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "confusionMatrix",
    "signature": "confusionMatrix()",
    "insertText": "confusionMatrix()",
    "doc": "Computes a 2D confusion matrix for a classifier based on its training data (e.g., resubstitution error). Axis 0 of the matrix corresponds to the input classes and axis 1 corresponds to the output classes. The rows and columns start at class 0 and increase sequentially up to the maximum class value, so some rows or columns might be empty if the input classes aren't 0-based or sequential.",
    "kind": "method",
    "returnType": "ee.ConfusionMatrix"
  },
  {
    "receiver": "ee.Classifier",
    "name": "decisionTree",
    "signature": "decisionTree(treeString)",
    "insertText": "decisionTree(${1:treeString})",
    "doc": "Creates a classifier that applies the given decision tree.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "decisionTreeEnsemble",
    "signature": "decisionTreeEnsemble(treeStrings)",
    "insertText": "decisionTreeEnsemble(${1:treeStrings})",
    "doc": "Creates a classifier that applies the given decision trees.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "explain",
    "signature": "explain()",
    "insertText": "explain()",
    "doc": "The examples also show how to evaluate the classifier's performance using confusion matrices and overall accuracy for both training and validation samples.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Classifier",
    "name": "libsvm",
    "signature": "libsvm(decisionProcedure, svmType, kernelType, shrinking, degree, gamma, coef0, cost, nu, terminationEpsilon, lossEpsilon, oneClass)",
    "insertText": "libsvm(${1:decisionProcedure}, ${2:svmType}, ${3:kernelType}, ${4:shrinking}, ${5:degree}, ${6:gamma}, ${7:coef0}, ${8:cost}, ${9:nu}, ${10:terminationEpsilon}, ${11:lossEpsilon}, ${12:oneClass})",
    "doc": "The examples demonstrate how to use the classifier to train and classify an image using land cover data.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "load",
    "signature": "load(id)",
    "insertText": "load(${1:id})",
    "doc": "Creates a Classifier.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "minimumDistance",
    "signature": "minimumDistance(metric, kNearest)",
    "insertText": "minimumDistance(${1:metric}, ${2:kNearest})",
    "doc": "Creates a minimum distance classifier for the given distance metric. In CLASSIFICATION mode, the nearest class is returned. In REGRESSION mode, the distance to the nearest class center is returned. In RAW mode, the distance to every class center is returned.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "mode",
    "signature": "mode()",
    "insertText": "mode()",
    "doc": "Returns the classifier mode: CLASSIFICATION , REGRESSION , PROBABILITY , MULTIPROBABILITY , RAW , or RAW_REGRESSION .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Classifier",
    "name": "schema",
    "signature": "schema()",
    "insertText": "schema()",
    "doc": "Returns the names of the inputs used by this classifier or null if this classifier has not had any training data added yet.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Classifier",
    "name": "setOutputMode",
    "signature": "setOutputMode(mode)",
    "insertText": "setOutputMode(${1:mode})",
    "doc": "Refer to https://developers.google.com/earth-engine/guides/classification for a list of supported modes for each classifier.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "smileCart",
    "signature": "smileCart(maxNodes, minLeafPopulation)",
    "insertText": "smileCart(${1:maxNodes}, ${2:minLeafPopulation})",
    "doc": "Creates an empty CART classifier. See:",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "smileGradientTreeBoost",
    "signature": "smileGradientTreeBoost(numberOfTrees, shrinkage, samplingRate, maxNodes, loss, seed)",
    "insertText": "smileGradientTreeBoost(${1:numberOfTrees}, ${2:shrinkage}, ${3:samplingRate}, ${4:maxNodes}, ${5:loss}, ${6:seed})",
    "doc": "The provided examples demonstrate training and evaluating a gradient boosting classifier using Earth Engine in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "smileKNN",
    "signature": "smileKNN(k, searchMethod, metric)",
    "insertText": "smileKNN(${1:k}, ${2:searchMethod}, ${3:metric})",
    "doc": "The k-nearest neighbor algorithm (k-NN) is a method for classifying objects by a majority vote of its neighbors, with the object being assigned to the class most common amongst its k nearest neighbors (k is a positive integer, typically small, typically odd).",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "smileNaiveBayes",
    "signature": "smileNaiveBayes(lambda)",
    "insertText": "smileNaiveBayes(${1:lambda})",
    "doc": "The examples also show how to split data into training and validation sets, evaluate classifier accuracy using confusion matrices, and visualize the results on a map.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "smileRandomForest",
    "signature": "smileRandomForest(numberOfTrees, variablesPerSplit, minLeafPopulation, bagFraction, maxNodes, seed)",
    "insertText": "smileRandomForest(${1:numberOfTrees}, ${2:variablesPerSplit}, ${3:minLeafPopulation}, ${4:bagFraction}, ${5:maxNodes}, ${6:seed})",
    "doc": "Example code demonstrates training and applying a Random Forest classifier to satellite imagery for land cover classification.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "spectralRegion",
    "signature": "spectralRegion(coordinates, schema)",
    "insertText": "spectralRegion(${1:coordinates}, ${2:schema})",
    "doc": "Creates a classifier that tests if its inputs lie within a polygon defined by a set of coordinates in an arbitrary 2D coordinate system. Each input to be classified must have 2 values (e.g., images must have 2 bands). The result will be 1 wherever the input values are contained within the given polygon and 0 otherwise.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Classifier",
    "name": "train",
    "signature": "train(features, classProperty, inputProperties, subsampling, subsamplingSeed)",
    "insertText": "train(${1:features}, ${2:classProperty}, ${3:inputProperties}, ${4:subsampling}, ${5:subsamplingSeed})",
    "doc": "Trains the classifier on a collection of features, using the specified numeric properties of each feature as training data. The geometry of the features is ignored.",
    "kind": "method",
    "returnType": "ee.Classifier"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "schema",
    "signature": "schema()",
    "insertText": "schema()",
    "doc": "Returns the names of the inputs used by this Clusterer, or null if this Clusterer has not had any training data added yet.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Clusterer",
    "name": "train",
    "signature": "train(features, inputProperties, subsampling, subsamplingSeed)",
    "insertText": "train(${1:features}, ${2:inputProperties}, ${3:subsampling}, ${4:subsamplingSeed})",
    "doc": "Trains the Clusterer on a collection of features using the specified numeric properties of each feature as training data. The geometry of the features is ignored.",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "wekaCascadeKMeans",
    "signature": "wekaCascadeKMeans(minClusters, maxClusters, restarts, manual, init, distanceFunction, maxIterations)",
    "insertText": "wekaCascadeKMeans(${1:minClusters}, ${2:maxClusters}, ${3:restarts}, ${4:manual}, ${5:init}, ${6:distanceFunction}, ${7:maxIterations})",
    "doc": "Cascade simple k-means selects the best k according to the Calinski-Harabasz criterion. For more information see:",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "wekaCobweb",
    "signature": "wekaCobweb(acuity, cutoff, seed)",
    "insertText": "wekaCobweb(${1:acuity}, ${2:cutoff}, ${3:seed})",
    "doc": "D. Fisher (1987). Knowledge acquisition via incremental conceptual clustering. Machine Learning. 2(2):139-172. and J. H. Gennari, P. Langley, D. Fisher (1990). Models of incremental concept formation. Artificial Intelligence. 40:11-61.",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "wekaKMeans",
    "signature": "wekaKMeans(nClusters, init, canopies, maxCandidates, periodicPruning, minDensity, t1, t2, distanceFunction, maxIterations, preserveOrder, fast, seed)",
    "insertText": "wekaKMeans(${1:nClusters}, ${2:init}, ${3:canopies}, ${4:maxCandidates}, ${5:periodicPruning}, ${6:minDensity}, ${7:t1}, ${8:t2}, ${9:distanceFunction}, ${10:maxIterations}, ${11:preserveOrder}, ${12:fast}, ${13:seed})",
    "doc": "Cluster data using the k-means algorithm. Can use either the Euclidean distance (default) or the Manhattan distance. If the Manhattan distance is used, then centroids are computed as the component-wise median rather than mean. For more information see:",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "wekaLVQ",
    "signature": "wekaLVQ(numClusters, learningRate, epochs, normalizeInput)",
    "insertText": "wekaLVQ(${1:numClusters}, ${2:learningRate}, ${3:epochs}, ${4:normalizeInput})",
    "doc": "T. Kohonen, \"Learning Vector Quantization\", The Handbook of Brain Theory and Neural Networks, 2nd Edition, MIT Press, 2003, pp. 631-634.",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.Clusterer",
    "name": "wekaXMeans",
    "signature": "wekaXMeans(minClusters, maxClusters, maxIterations, maxKMeans, maxForChildren, useKD, cutoffFactor, distanceFunction, seed)",
    "insertText": "wekaXMeans(${1:minClusters}, ${2:maxClusters}, ${3:maxIterations}, ${4:maxKMeans}, ${5:maxForChildren}, ${6:useKD}, ${7:cutoffFactor}, ${8:distanceFunction}, ${9:seed})",
    "doc": "Dan Pelleg, Andrew W. Moore: X-means: Extending K-means with Efficient Estimation of the Number of Clusters. In: Seventeenth International Conference on Machine Learning, 727-734, 2000.",
    "kind": "method",
    "returnType": "ee.Clusterer"
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "accuracy",
    "signature": "accuracy()",
    "insertText": "accuracy()",
    "doc": "The JavaScript and Python code examples demonstrate how to calculate overall accuracy and other metrics like consumer's accuracy, producer's accuracy, and the Kappa statistic from a confusion matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "array",
    "signature": "array()",
    "insertText": "array()",
    "doc": "The examples demonstrate how to create a ConfusionMatrix and then retrieve its array representation in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "consumersAccuracy",
    "signature": "consumersAccuracy()",
    "insertText": "consumersAccuracy()",
    "doc": "The example code demonstrates how to use consumersAccuracy() along with other accuracy metrics like overall accuracy, producer's accuracy, and kappa statistic.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "fscore",
    "signature": "fscore(beta)",
    "insertText": "fscore(${1:beta})",
    "doc": "Computes the F��-score for the confusion matrix.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "kappa",
    "signature": "kappa()",
    "insertText": "kappa()",
    "doc": "The provided examples show how to calculate the Kappa statistic using both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "order",
    "signature": "order()",
    "insertText": "order()",
    "doc": "The examples demonstrate how to use order() in both JavaScript and Python with confusion matrices constructed from arrays.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ConfusionMatrix",
    "name": "producersAccuracy",
    "signature": "producersAccuracy()",
    "insertText": "producersAccuracy()",
    "doc": "The provided examples demonstrate how to use producersAccuracy() in both JavaScript and Python within the Earth Engine environment.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "authenticateViaOauth",
    "signature": "authenticateViaOauth(clientId, success, error, extraScopes, onImmediateFailed, suppressDefaultScopes)",
    "insertText": "authenticateViaOauth(${1:clientId}, ${2:success}, ${3:error}, ${4:extraScopes}, ${5:onImmediateFailed}, ${6:suppressDefaultScopes})",
    "doc": "The auth token will be refreshed automatically when possible. You can safely assume that all async calls will be sent with the appropriate credentials. For synchronous calls, however, you should check for an auth token with ee.data.getAuthToken() and call ee.data.refreshAuthToken() manually if there is none. The token refresh operation is asynchronous and cannot be performed behind-the-scenes on-demand prior to synchronous calls.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "authenticateViaPopup",
    "signature": "authenticateViaPopup(success, error)",
    "insertText": "authenticateViaPopup(${1:success}, ${2:error})",
    "doc": "Shows a popup asking for the user's permission. Should only be called if ee.data.authenticate() called its opt_onImmediateFailed argument in the past.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "authenticateViaPrivateKey",
    "signature": "authenticateViaPrivateKey(privateKey, success, error, extraScopes, suppressDefaultScopes)",
    "insertText": "authenticateViaPrivateKey(${1:privateKey}, ${2:success}, ${3:error}, ${4:extraScopes}, ${5:suppressDefaultScopes})",
    "doc": "The auth token will be refreshed automatically when possible. You can safely assume that all async calls will be sent with the appropriate credentials. For synchronous calls, however, you should check for an auth token with ee.data.getAuthToken() and call ee.data.refreshAuthToken() manually if there is none. The token refresh operation is asynchronous and cannot be performed behind-the-scenes, on demand, prior to synchronous calls.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "cancelOperation",
    "signature": "cancelOperation(operationName, callback)",
    "insertText": "cancelOperation(${1:operationName}, ${2:callback})",
    "doc": "Cancels the given operation(s).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "computeValue",
    "signature": "computeValue(obj, callback)",
    "insertText": "computeValue(${1:obj}, ${2:callback})",
    "doc": "Sends a request to compute a value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "copyAsset",
    "signature": "copyAsset(sourceId, destinationId, overwrite, callback)",
    "insertText": "copyAsset(${1:sourceId}, ${2:destinationId}, ${3:overwrite}, ${4:callback})",
    "doc": "Copies the asset from sourceId into destinationId.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "createAsset",
    "signature": "createAsset(value, path, force, properties, callback)",
    "insertText": "createAsset(${1:value}, ${2:path}, ${3:force}, ${4:properties}, ${5:callback})",
    "doc": "Creates an asset from a JSON value. To create an empty image collection or folder, pass in a \"value\" object with a \"type\" key whose value is one of ee.data.AssetType.* (i.e. \"ImageCollection\" or \"Folder\").",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "createAssetHome",
    "signature": "createAssetHome(requestedId, callback)",
    "insertText": "createAssetHome(${1:requestedId}, ${2:callback})",
    "doc": "Attempts to create a home root folder (e.g. \"users/joe\") for the current user. This results in an error if the user already has a home root folder or the requested ID is unavailable.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "createFolder",
    "signature": "createFolder(path, force, callback)",
    "insertText": "createFolder(${1:path}, ${2:force}, ${3:callback})",
    "doc": "Returns a description of the newly created folder.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "deleteAsset",
    "signature": "deleteAsset(assetId, callback)",
    "insertText": "deleteAsset(${1:assetId}, ${2:callback})",
    "doc": "Deletes the asset with the given id.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getAsset",
    "signature": "getAsset(id, callback)",
    "insertText": "getAsset(${1:id}, ${2:callback})",
    "doc": "Returns the value call results, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getAssetAcl",
    "signature": "getAssetAcl(assetId, callback)",
    "insertText": "getAssetAcl(${1:assetId}, ${2:callback})",
    "doc": "The authenticated user must be a writer or owner of an asset to see its ACL.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getAssetRootQuota",
    "signature": "getAssetRootQuota(rootId, callback)",
    "insertText": "getAssetRootQuota(${1:rootId}, ${2:callback})",
    "doc": "- The authenticated user must own the asset root to see its quota usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getDownloadId",
    "signature": "getDownloadId(params, callback)",
    "insertText": "getDownloadId(${1:params}, ${2:callback})",
    "doc": "Returns a download id and token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getFeatureViewTilesKey",
    "signature": "getFeatureViewTilesKey(params, callback)",
    "insertText": "getFeatureViewTilesKey(${1:params}, ${2:callback})",
    "doc": "Get a tiles key for a given map or asset. The tiles key can be passed to an instance of FeatureViewTileSource which can be rendered on a base map outside of the Code Editor.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getFilmstripThumbId",
    "signature": "getFilmstripThumbId(params, callback)",
    "insertText": "getFilmstripThumbId(${1:params}, ${2:callback})",
    "doc": "Returns the thumb ID and optional token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getMapId",
    "signature": "getMapId(params, callback)",
    "insertText": "getMapId(${1:params}, ${2:callback})",
    "doc": "Returns the mapId call results, which may be passed to ee.data.getTileUrl or ui.Map.addLayer. Null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getOperation",
    "signature": "getOperation(operationName, callback)",
    "insertText": "getOperation(${1:operationName}, ${2:callback})",
    "doc": "+ batch_eecu_usage_seconds: CPU used by this operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getTableDownloadId",
    "signature": "getTableDownloadId(params, callback)",
    "insertText": "getTableDownloadId(${1:params}, ${2:callback})",
    "doc": "Returns a download id and token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getThumbId",
    "signature": "getThumbId(params, callback)",
    "insertText": "getThumbId(${1:params}, ${2:callback})",
    "doc": "Returns the thumb ID and optional token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getTileUrl",
    "signature": "getTileUrl(id, x, y, z)",
    "insertText": "getTileUrl(${1:id}, ${2:x}, ${3:y}, ${4:z})",
    "doc": "Generate a URL for map tiles from a Map ID and coordinates. If formatTileUrl is not present, we generate it by using or guessing the urlFormat string, and add urlFormat and formatTileUrl to id for future use.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getVideoThumbId",
    "signature": "getVideoThumbId(params, callback)",
    "insertText": "getVideoThumbId(${1:params}, ${2:callback})",
    "doc": "Returns the thumb ID and optional token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "getWorkloadTag",
    "signature": "getWorkloadTag()",
    "insertText": "getWorkloadTag()",
    "doc": "Returns the currently set workload tag.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "listAssets",
    "signature": "listAssets(parent, params, callback)",
    "insertText": "listAssets(${1:parent}, ${2:params}, ${3:callback})",
    "doc": "Optional arguments include params (api.ProjectsAssetsListAssetsNamedParameters) for pagination, filtering, and view, and callback (Function) for asynchronous calls.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "listBuckets",
    "signature": "listBuckets(project, callback)",
    "insertText": "listBuckets(${1:project}, ${2:callback})",
    "doc": "Returns top-level assets and folders for the Cloud Project or user. Leave the project field blank to use the current project.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "listFeatures",
    "signature": "listFeatures(asset, params, callback)",
    "insertText": "listFeatures(${1:asset}, ${2:params}, ${3:callback})",
    "doc": "Returns the call results. Null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "listImages",
    "signature": "listImages(parent, params, callback)",
    "insertText": "listImages(${1:parent}, ${2:params}, ${3:callback})",
    "doc": "Returns a list of the contents in an image collection, in an object that includes an images array and an optional nextPageToken .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "listOperations",
    "signature": "listOperations(limit, callback)",
    "insertText": "listOperations(${1:limit}, ${2:callback})",
    "doc": "Returns see getOperation for details on the Operation object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "makeDownloadUrl",
    "signature": "makeDownloadUrl(id)",
    "insertText": "makeDownloadUrl(${1:id})",
    "doc": "Create a download URL from a docid and token.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "makeTableDownloadUrl",
    "signature": "makeTableDownloadUrl(id)",
    "insertText": "makeTableDownloadUrl(${1:id})",
    "doc": "Create a table download URL from a docid and token.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "makeThumbUrl",
    "signature": "makeThumbUrl(id)",
    "insertText": "makeThumbUrl(${1:id})",
    "doc": "Create a thumbnail URL from a thumbid and token.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "newTaskId",
    "signature": "newTaskId(count, callback)",
    "insertText": "newTaskId(${1:count}, ${2:callback})",
    "doc": "Returns an array containing generated ID strings, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "renameAsset",
    "signature": "renameAsset(sourceId, destinationId, callback)",
    "insertText": "renameAsset(${1:sourceId}, ${2:destinationId}, ${3:callback})",
    "doc": "Renames the asset from sourceId to destinationId.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "resetWorkloadTag",
    "signature": "resetWorkloadTag(resetDefault)",
    "insertText": "resetWorkloadTag(${1:resetDefault})",
    "doc": "Resets the tag back to the default. If resetDefault parameter is set to true, the default will be set to empty before resetting.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "setAssetAcl",
    "signature": "setAssetAcl(assetId, aclUpdate, callback)",
    "insertText": "setAssetAcl(${1:assetId}, ${2:aclUpdate}, ${3:callback})",
    "doc": "The authenticated user must be a writer or owner of an asset to set its ACL.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "setDefaultWorkloadTag",
    "signature": "setDefaultWorkloadTag(tag)",
    "insertText": "setDefaultWorkloadTag(${1:tag})",
    "doc": "(.), and alphanumerics between, or an empty string to reset the default back to none.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "setWorkloadTag",
    "signature": "setWorkloadTag(tag)",
    "insertText": "setWorkloadTag(${1:tag})",
    "doc": "(.), and alphanumerics between, or an empty string to clear the workload tag.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "startIngestion",
    "signature": "startIngestion(taskId, request, callback)",
    "insertText": "startIngestion(${1:taskId}, ${2:request}, ${3:callback})",
    "doc": "See ee.data.startProcessing for details on task IDs and response format.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "startProcessing",
    "signature": "startProcessing(taskId, params, callback)",
    "insertText": "startProcessing(${1:taskId}, ${2:params}, ${3:callback})",
    "doc": "- note: may have value 'ALREADY_EXISTS' if an identical task with the same unsubmitted ID already exists.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "startTableIngestion",
    "signature": "startTableIngestion(taskId, request, callback)",
    "insertText": "startTableIngestion(${1:taskId}, ${2:request}, ${3:callback})",
    "doc": "See ee.data.startProcessing for details on task IDs and response format.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "updateAsset",
    "signature": "updateAsset(assetId, asset, updateFields, callback)",
    "insertText": "updateAsset(${1:assetId}, ${2:asset}, ${3:updateFields}, ${4:callback})",
    "doc": "The authenticated user must be a writer or owner of the asset.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.data",
    "name": "updateTask",
    "signature": "updateTask(taskId, action, callback)",
    "insertText": "updateTask(${1:taskId}, ${2:action}, ${3:callback})",
    "doc": "Update one or more tasks' properties. For now, only the following properties may be updated: State (to CANCELLED)",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "advance",
    "signature": "advance(delta, unit, timeZone)",
    "insertText": "advance(${1:delta}, ${2:unit}, ${3:timeZone})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the advance method with positive and negative delta values.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.Date",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "difference",
    "signature": "difference(start, unit)",
    "insertText": "difference(${1:start}, ${2:unit})",
    "doc": "Returns the difference between two Dates in the specified units; the result is floating-point and based on the average length of the unit.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "The Python client library does not have an evaluate method for asynchronous evaluation of ee.Date objects; ee.Date.getInfo() should be used instead.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "format",
    "signature": "format(format, timeZone)",
    "insertText": "format(${1:format}, ${2:timeZone})",
    "doc": "The default time zone is UTC.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "fromYMD",
    "signature": "fromYMD(year, month, day, timeZone)",
    "insertText": "fromYMD(${1:year}, ${2:month}, ${3:day}, ${4:timeZone})",
    "doc": "An optional timeZone argument can be provided as a String, defaulting to UTC if not specified.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.Date",
    "name": "get",
    "signature": "get(unit, timeZone)",
    "insertText": "get(${1:unit}, ${2:timeZone})",
    "doc": "An optional timeZone argument can be provided to specify the time zone for the calculation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "getFraction",
    "signature": "getFraction(unit, timeZone)",
    "insertText": "getFraction(${1:unit}, ${2:timeZone})",
    "doc": "The output is a float value between 0 and 1, representing the fraction of the unit that has passed.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "getRange",
    "signature": "getRange(unit, timeZone)",
    "insertText": "getRange(${1:unit}, ${2:timeZone})",
    "doc": "Returns a DateRange covering the unit of the specified type that contains this date, e.g., Date('2013-3-15').getRange('year') returns DateRange('2013-1-1', '2014-1-1').",
    "kind": "method",
    "returnType": "ee.DateRange"
  },
  {
    "receiver": "ee.Date",
    "name": "getRelative",
    "signature": "getRelative(unit, inUnit, timeZone)",
    "insertText": "getRelative(${1:unit}, ${2:inUnit}, ${3:timeZone})",
    "doc": "Returns the specified (0-based) unit of this date relative to a larger unit, e.g., getRelative('day', 'year') returns a value between 0 and 365.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "millis",
    "signature": "millis()",
    "insertText": "millis()",
    "doc": "Examples are provided in JavaScript and Python to demonstrate usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "parse",
    "signature": "parse(format, date, timeZone)",
    "insertText": "parse(${1:format}, ${2:date}, ${3:timeZone})",
    "doc": "The format pattern follows the Joda-Time DateTimeFormat guidelines.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.Date",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "The serialize() method can optionally take a boolean argument legacy to enable a legacy format.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "unitRatio",
    "signature": "unitRatio(numerator, denominator)",
    "insertText": "unitRatio(${1:numerator}, ${2:denominator})",
    "doc": "Returns the ratio of the length of one unit to the length of another, e.g., unitRatio('day', 'minute') returns 1440. Valid units are 'year', 'month', 'week', 'day', 'hour', 'minute', and 'second'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Date",
    "name": "update",
    "signature": "update(year, month, day, hour, minute, second, timeZone)",
    "insertText": "update(${1:year}, ${2:month}, ${3:day}, ${4:hour}, ${5:minute}, ${6:second}, ${7:timeZone})",
    "doc": "Create a new Date by setting one or more of the units of the given Date to a new value. If a timeZone is given the new value(s) is interpreted in that zone.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.DateRange",
    "name": "contains",
    "signature": "contains(other)",
    "insertText": "contains(${1:other})",
    "doc": "The method takes one argument, other , which can be a Date or a DateRange.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.DateRange",
    "name": "end",
    "signature": "end()",
    "insertText": "end()",
    "doc": "The method returns a Date object representing the end of the range.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.DateRange",
    "name": "intersection",
    "signature": "intersection(other)",
    "insertText": "intersection(${1:other})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to find the intersection of two ee.DateRange objects.",
    "kind": "method",
    "returnType": "ee.DateRange"
  },
  {
    "receiver": "ee.DateRange",
    "name": "intersects",
    "signature": "intersects(other)",
    "insertText": "intersects(${1:other})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the intersects method to check for overlap between different date ranges.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.DateRange",
    "name": "isEmpty",
    "signature": "isEmpty()",
    "insertText": "isEmpty()",
    "doc": "Examples demonstrate how to use isEmpty() with different ee.DateRange objects in both JavaScript and Python to check if they are empty.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.DateRange",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate the usage of isUnbounded() on both bounded and unbounded DateRange objects.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.DateRange",
    "name": "start",
    "signature": "start()",
    "insertText": "start()",
    "doc": "Examples demonstrate how to use dateRange.start() to retrieve and print the start date of a defined DateRange.",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.DateRange",
    "name": "unbounded",
    "signature": "unbounded()",
    "insertText": "unbounded()",
    "doc": "Returns a DateRange that includes all possible dates.",
    "kind": "method",
    "returnType": "ee.DateRange"
  },
  {
    "receiver": "ee.DateRange",
    "name": "union",
    "signature": "union(other)",
    "insertText": "union(${1:other})",
    "doc": "The union method can be used with DateRange objects that overlap or do not overlap.",
    "kind": "method",
    "returnType": "ee.DateRange"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "combine",
    "signature": "combine(second, overwrite)",
    "insertText": "combine(${1:second}, ${2:overwrite})",
    "doc": "Combines two dictionaries. In the case of duplicate names, the output will contain the value of the second dictionary unless overwrite is false. Null values in both dictionaries are ignored / removed.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "contains",
    "signature": "contains(key)",
    "insertText": "contains(${1:key})",
    "doc": "Examples in both JavaScript and Python demonstrate how to use the method and interpret the boolean output.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "The Earth Engine Python client library does not have an evaluate method for asynchronous evaluation; instead, ee.Dictionary.getInfo() should be used.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "fromLists",
    "signature": "fromLists(keys, values)",
    "insertText": "fromLists(${1:keys}, ${2:values})",
    "doc": "Examples are provided for both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "get",
    "signature": "get(key, defaultValue)",
    "insertText": "get(${1:key}, ${2:defaultValue})",
    "doc": "Extracts a named value from a dictionary. If the dictionary does not contain the given key, then defaultValue is returned, unless it is null.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "getArray",
    "signature": "getArray(key)",
    "insertText": "getArray(${1:key})",
    "doc": "It takes a string key as an argument and returns an Array.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "getGeometry",
    "signature": "getGeometry(key)",
    "insertText": "getGeometry(${1:key})",
    "doc": "Examples are provided for using this method in both JavaScript and Python code editors.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "getNumber",
    "signature": "getNumber(key)",
    "insertText": "getNumber(${1:key})",
    "doc": "Example code is provided for both JavaScript and Python demonstrating how to use getNumber .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "getString",
    "signature": "getString(key)",
    "insertText": "getString(${1:key})",
    "doc": "Examples are provided for usage in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "keys",
    "signature": "keys()",
    "insertText": "keys()",
    "doc": "Retrieve the keys of a dictionary as a list. The keys will be sorted in natural order.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "map",
    "signature": "map(baseAlgorithm)",
    "insertText": "map(${1:baseAlgorithm})",
    "doc": "Map an algorithm over a dictionary. The algorithm is expected to take 2 arguments, a key from the existing dictionary and the value it corresponds to, and return a new value for the given key. If the algorithm returns null, the key is dropped.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "remove",
    "signature": "remove(selectors, ignoreMissing)",
    "insertText": "remove(${1:selectors}, ${2:ignoreMissing})",
    "doc": "The ignoreMissing argument is a boolean that, when set to true, ignores selectors that don't match any keys, preventing errors.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "rename",
    "signature": "rename(from, to, overwrite)",
    "insertText": "rename(${1:from}, ${2:to}, ${3:overwrite})",
    "doc": "The overwrite parameter allows replacing existing keys with the new names.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "select",
    "signature": "select(selectors, ignoreMissing)",
    "insertText": "select(${1:selectors}, ${2:ignoreMissing})",
    "doc": "The ignoreMissing argument, which defaults to false, can be set to true to prevent errors if a selector doesn't match any keys.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples demonstrate using serialize() on an ee.Dictionary in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "set",
    "signature": "set(key, value)",
    "insertText": "set(${1:key}, ${2:value})",
    "doc": "Examples in JavaScript and Python demonstrate how to use Dictionary.set to change a value associated with a specific key.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "size",
    "signature": "size()",
    "insertText": "size()",
    "doc": "The size() method can be used in both JavaScript and Python with Earth Engine.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "toArray",
    "signature": "toArray(keys, axis)",
    "insertText": "toArray(${1:keys}, ${2:axis})",
    "doc": "Returns numeric values of a dictionary as an array. If no keys are specified, all values are returned in the natural ordering of the dictionary's keys. The default 'axis' is 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Dictionary",
    "name": "toImage",
    "signature": "toImage(names)",
    "insertText": "toImage(${1:names})",
    "doc": "Creates an image of constants from values in a dictionary. The bands of the image are ordered and named according to the names argument. If no names are specified, the bands are sorted alpha-numerically.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Dictionary",
    "name": "values",
    "signature": "values(keys)",
    "insertText": "values(${1:keys})",
    "doc": "Returns the values of a dictionary as a list. If no keys are specified, all values are returned in the natural ordering of the dictionary's keys.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the feature's default geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Returns a feature containing the bounding box of the geometry of a given feature.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a feature containing the point at the center of the highest-dimension components of the geometry of a feature. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input feature's geometry that is closest to the geometry of the other input. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if the geometry of one feature is contained in the geometry of another.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if the geometry of one feature contains the geometry of another.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the feature with the geometry replaced by the convex hull of the original geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "copyProperties",
    "signature": "copyProperties(source, properties, exclude)",
    "insertText": "copyProperties(${1:source}, ${2:properties}, ${3:exclude})",
    "doc": "Copies metadata properties from one element to another.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a feature with the properties of the 'left' feature, and the geometry that results from subtracting the 'right' geometry from the 'left' geometry.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if the feature geometries are disjoint.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns a feature containing the union of the geometry of a feature. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Returns the minimum distance between the geometries of two features.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "geometry",
    "signature": "geometry(maxError, proj, geodesics)",
    "insertText": "geometry(${1:maxError}, ${2:proj}, ${3:geodesics})",
    "doc": "Returns the geometry of a given feature in a given projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Feature",
    "name": "get",
    "signature": "get(property)",
    "insertText": "get(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "getArray",
    "signature": "getArray(property)",
    "insertText": "getArray(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "An imperative function that returns information about this feature via an AJAX call.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "getMapId",
    "signature": "getMapId(visParams, callback)",
    "insertText": "getMapId(${1:visParams}, ${2:callback})",
    "doc": "Returns an object which may be passed to ee.data.getTileUrl or ui.Map.addLayer, including an additional 'image' field, containing a Collection.draw image wrapping a FeatureCollection containing this feature. Undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "getNumber",
    "signature": "getNumber(property)",
    "insertText": "getNumber(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "getString",
    "signature": "getString(property)",
    "insertText": "getString(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "hersDescriptor",
    "signature": "hersDescriptor(selectors, buckets, peakWidthScale)",
    "insertText": "hersDescriptor(${1:selectors}, ${2:buckets}, ${3:peakWidthScale})",
    "doc": "Creates a dictionary of Histogram Error Ring Statistic (HERS) descriptor arrays from square array properties of an element. The HERS radius is taken to be the array's (side_length - 1) / 2.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Feature",
    "name": "id",
    "signature": "id()",
    "insertText": "id()",
    "doc": "Returns the ID of a given element within a collection. Objects outside collections are not guaranteed to have IDs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a feature containing the intersection of the geometries of two features, with the properties of the left feature.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if the feature geometries intersect.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry of a given feature. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry of a given feature. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "propertyNames",
    "signature": "propertyNames()",
    "insertText": "propertyNames()",
    "doc": "Returns the names of properties on this element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "select",
    "signature": "select(propertySelectors, newProperties, retainGeometry)",
    "insertText": "select(${1:propertySelectors}, ${2:newProperties}, ${3:retainGeometry})",
    "doc": "Selects properties from a feature by name or RE2-compatible regex and optionally renames them.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "set",
    "signature": "set(var_args)",
    "insertText": "set(${1:var_args})",
    "doc": "Returns the element with the specified properties overridden.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "setGeometry",
    "signature": "setGeometry(geometry)",
    "insertText": "setGeometry(${1:geometry})",
    "doc": "Returns the feature with the geometry replaced by the specified geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a feature containing the symmetric difference between geometries of two features.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "toArray",
    "signature": "toArray(properties)",
    "insertText": "toArray(${1:properties})",
    "doc": "Creates an array from the given properties of an object, which must all be numbers.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Feature",
    "name": "toDictionary",
    "signature": "toDictionary(properties)",
    "insertText": "toDictionary(${1:properties})",
    "doc": "Extract properties from a feature as a dictionary.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Feature",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry of a feature to a specific projection.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a feature containing the union of the geometries of two features.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Feature",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "Returns true if and only if the geometries of two features are within a specified distance.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_array",
    "signature": "aggregate_array(property)",
    "insertText": "aggregate_array(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating a list of all the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_count",
    "signature": "aggregate_count(property)",
    "insertText": "aggregate_count(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the number of non-null values of the property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_count_distinct",
    "signature": "aggregate_count_distinct(property)",
    "insertText": "aggregate_count_distinct(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the number of distinct values for the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_first",
    "signature": "aggregate_first(property)",
    "insertText": "aggregate_first(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the property value of the first object in the collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_histogram",
    "signature": "aggregate_histogram(property)",
    "insertText": "aggregate_histogram(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating a histogram of the selected property.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_max",
    "signature": "aggregate_max(property)",
    "insertText": "aggregate_max(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the maximum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_mean",
    "signature": "aggregate_mean(property)",
    "insertText": "aggregate_mean(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the mean of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_min",
    "signature": "aggregate_min(property)",
    "insertText": "aggregate_min(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the minimum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_product",
    "signature": "aggregate_product(property)",
    "insertText": "aggregate_product(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the product of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_sample_sd",
    "signature": "aggregate_sample_sd(property)",
    "insertText": "aggregate_sample_sd(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sample std. deviation of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_sample_var",
    "signature": "aggregate_sample_var(property)",
    "insertText": "aggregate_sample_var(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sample variance of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_stats",
    "signature": "aggregate_stats(property)",
    "insertText": "aggregate_stats(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sum, min, max, mean, sample standard deviation, sample variance, total standard deviation and total variance of the selected property.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_sum",
    "signature": "aggregate_sum(property)",
    "insertText": "aggregate_sum(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_total_sd",
    "signature": "aggregate_total_sd(property)",
    "insertText": "aggregate_total_sd(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the total std. deviation of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aggregate_total_var",
    "signature": "aggregate_total_var(property)",
    "insertText": "aggregate_total_var(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the total variance of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Examples are provided demonstrating its use in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "classify",
    "signature": "classify(classifier, outputName)",
    "insertText": "classify(${1:classifier}, ${2:outputName})",
    "doc": "The examples demonstrate classifying features derived from satellite imagery and computing an error matrix to evaluate the classification accuracy.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "cluster",
    "signature": "cluster(clusterer, outputName)",
    "insertText": "cluster(${1:clusterer}, ${2:outputName})",
    "doc": "Clusters each feature in a collection, adding a new column to each feature containing the cluster number to which it has been assigned.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "copyProperties",
    "signature": "copyProperties(source, properties, exclude)",
    "insertText": "copyProperties(${1:source}, ${2:properties}, ${3:exclude})",
    "doc": "The method returns the modified destination element with the copied properties.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "distance",
    "signature": "distance(searchRadius, maxError)",
    "insertText": "distance(${1:searchRadius}, ${2:maxError})",
    "doc": "Produces a DOUBLE image where each pixel is the distance in meters from the pixel center to the nearest Point, LineString, or polygonal boundary in the collection. Note distance is also measured within interiors of polygons. Pixels that are not within 'searchRadius' meters of a geometry will be masked out.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "distinct",
    "signature": "distinct(properties)",
    "insertText": "distinct(${1:properties})",
    "doc": "Removes duplicates from a collection. Note that duplicates are determined using a strong hash over the serialized form of the selected properties.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "draw",
    "signature": "draw(color, pointRadius, strokeWidth)",
    "insertText": "draw(${1:color}, ${2:pointRadius}, ${3:strokeWidth})",
    "doc": "Paints a vector collection for visualization. Not intended for use as input to other algorithms.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "errorMatrix",
    "signature": "errorMatrix(actual, predicted, order)",
    "insertText": "errorMatrix(${1:actual}, ${2:predicted}, ${3:order})",
    "doc": "Computes a 2D error matrix for a collection by comparing two columns of a collection: one containing the actual values, and one containing predicted values. The values are expected to be small contiguous integers, starting from 0. Axis 0 (the rows) of the matrix correspond to the actual values, and Axis 1 (the columns) to the predicted values.",
    "kind": "method",
    "returnType": "ee.ConfusionMatrix"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "In JavaScript, FeatureCollection.evaluate() can be used, while in Python, ee.FeatureCollection.getInfo() is used instead as there is no evaluate method for asynchronous evaluation of ee.FeatureCollection objects.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "filter",
    "signature": "filter(filter)",
    "insertText": "filter(${1:filter})",
    "doc": "Apply a filter to this collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "filterBounds",
    "signature": "filterBounds(geometry)",
    "insertText": "filterBounds(${1:geometry})",
    "doc": "Shortcut to filter a collection by intersection with geometry. Items in the collection with a footprint that fails to intersect the given geometry will be excluded.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "filterDate",
    "signature": "filterDate(start, end)",
    "insertText": "filterDate(${1:start}, ${2:end})",
    "doc": "Shortcut to filter a collection by a date range. The start and end may be Dates, numbers (interpreted as milliseconds since 1970-01-01T00:00:00Z), or strings (such as '1996-01-01T08:00'). Based on 'system:time_start'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "first",
    "signature": "first()",
    "insertText": "first()",
    "doc": "The method FeatureCollection.first() takes a FeatureCollection as input and returns an Element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "flatten",
    "signature": "flatten()",
    "insertText": "flatten()",
    "doc": "The method takes a FeatureCollection as input and returns a flattened FeatureCollection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "geometry",
    "signature": "geometry(maxError)",
    "insertText": "geometry(${1:maxError})",
    "doc": "Extracts and merges the geometries of a collection. Requires that all the geometries in the collection share the projection and edge interpretation.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "get",
    "signature": "get(property)",
    "insertText": "get(${1:property})",
    "doc": "The returned value is an ee.ComputedObject, which can be cast to the relevant Earth Engine object class for further use.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getArray",
    "signature": "getArray(property)",
    "insertText": "getArray(${1:property})",
    "doc": "The provided examples demonstrate how to use getArray in both JavaScript and Python to retrieve an array property from a FeatureCollection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getDownloadURL",
    "signature": "getDownloadURL(format, selectors, filename, callback)",
    "insertText": "getDownloadURL(${1:format}, ${2:selectors}, ${3:filename}, ${4:callback})",
    "doc": "Gets a download URL. When the URL is accessed, the FeatureCollection is downloaded in one of several formats.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "An imperative function that returns all the known information about this collection via an AJAX call.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getMapId",
    "signature": "getMapId(visParams, callback)",
    "insertText": "getMapId(${1:visParams}, ${2:callback})",
    "doc": "Returns an object which may be passed to ee.data.getTileUrl or ui.Map.addLayer, including an additional 'image' field, containing a Collection.draw image wrapping a FeatureCollection containing this feature. Undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getNumber",
    "signature": "getNumber(property)",
    "insertText": "getNumber(${1:property})",
    "doc": "Examples in both JavaScript and Python demonstrate how to apply getNumber to retrieve a specific number property from a FeatureCollection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "getString",
    "signature": "getString(property)",
    "insertText": "getString(${1:property})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "inverseDistance",
    "signature": "inverseDistance(range, propertyName, mean, stdDev, gamma, reducer)",
    "insertText": "inverseDistance(${1:range}, ${2:propertyName}, ${3:mean}, ${4:stdDev}, ${5:gamma}, ${6:reducer})",
    "doc": "Returns an inverse-distance weighted estimate of the value at each pixel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "iterate",
    "signature": "iterate(algorithm, first)",
    "insertText": "iterate(${1:algorithm}, ${2:first})",
    "doc": "Applies a user-supplied function to each element of a collection. The user-supplied function is given two arguments: the current element, and the value returned by the previous call to iterate() or the first argument, for the first iteration. The result is the value returned by the final call to the user-supplied function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "kriging",
    "signature": "kriging(propertyName, shape, range, sill, nugget, maxDistance, reducer)",
    "insertText": "kriging(${1:propertyName}, ${2:shape}, ${3:range}, ${4:sill}, ${5:nugget}, ${6:maxDistance}, ${7:reducer})",
    "doc": "Examples demonstrate using kriging to generate an interpolated surface of air temperature from sampled points in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "limit",
    "signature": "limit(max, property, ascending)",
    "insertText": "limit(${1:max}, ${2:property}, ${3:ascending})",
    "doc": "Limit a collection to the specified number of elements, optionally sorting them by a specified property first.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "loadBigQueryTable",
    "signature": "loadBigQueryTable(table, geometryColumn)",
    "insertText": "loadBigQueryTable(${1:table}, ${2:geometryColumn})",
    "doc": "Examples demonstrate how to use loadBigQueryTable in both JavaScript and Python to load and display geographical features from a BigQuery table.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "makeArray",
    "signature": "makeArray(properties, name)",
    "insertText": "makeArray(${1:properties}, ${2:name})",
    "doc": "Add a 1-D Array to each feature in a collection by combining a list of properties for each feature into a 1-D Array. All of the properties must be numeric values. If a feature doesn't contain all of the named properties, or any of them aren't numeric, the feature will be dropped from the resulting collection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "map",
    "signature": "map(algorithm, dropNulls)",
    "insertText": "map(${1:algorithm}, ${2:dropNulls})",
    "doc": "Maps an algorithm over a collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "merge",
    "signature": "merge(collection2)",
    "insertText": "merge(${1:collection2})",
    "doc": "Elements from the first collection will have IDs prefixed with \"1 \" and elements from the second collection will have IDs prefixed with \"2 \".",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "propertyNames",
    "signature": "propertyNames()",
    "insertText": "propertyNames()",
    "doc": "Examples demonstrate using propertyNames() in JavaScript and Python code editors.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "randomColumn",
    "signature": "randomColumn(columnName, seed, distribution, rowKeys)",
    "insertText": "randomColumn(${1:columnName}, ${2:seed}, ${3:distribution}, ${4:rowKeys})",
    "doc": "Adds a column of deterministic pseudorandom numbers to a collection. The outputs are double-precision floating point numbers. When using the 'uniform' distribution (default), outputs are in the range of [0, 1). Using the 'normal' distribution, outputs have ��=0, ��=1, but have no explicit limits.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "randomPoints",
    "signature": "randomPoints(region, points, seed, maxError)",
    "insertText": "randomPoints(${1:region}, ${2:points}, ${3:seed}, ${4:maxError})",
    "doc": "Generates points that are uniformly random in the given geometry. If the geometry is two-dimensional (polygon or multi-polygon) then the returned points are uniformly distributed on the given region of the sphere. If the geometry is one-dimensional (linestrings), the returned points are interpolated uniformly along the geometry's edges. If the geometry has dimension zero (points), the returned points are sampled uniformly from the input points. If a multi-geometry of mixed dimension is given, points are sampled from the component geometries with the highest dimension.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "reduceColumns",
    "signature": "reduceColumns(reducer, selectors, weightSelectors)",
    "insertText": "reduceColumns(${1:reducer}, ${2:selectors}, ${3:weightSelectors})",
    "doc": "Apply a reducer to each element of a collection, using the given selectors to determine the inputs.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "reduceToImage",
    "signature": "reduceToImage(properties, reducer)",
    "insertText": "reduceToImage(${1:properties}, ${2:reducer})",
    "doc": "The provided examples demonstrate how to use reduceToImage in both JavaScript and Python to visualize the sum of electricity generation from power plants.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "remap",
    "signature": "remap(lookupIn, lookupOut, columnName)",
    "insertText": "remap(${1:lookupIn}, ${2:lookupOut}, ${3:columnName})",
    "doc": "Remaps the value of a specific property in a collection. Takes two parallel lists and maps values found in one to values in the other. Any element with a value that is not specified in the first list is dropped from the output collection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "runBigQuery",
    "signature": "runBigQuery(query, geometryColumn, maxBytesBilled)",
    "insertText": "runBigQuery(${1:query}, ${2:geometryColumn}, ${3:maxBytesBilled})",
    "doc": "The examples demonstrate how to use runBigQuery in both JavaScript and Python to fetch data from BigQuery and visualize or analyze it.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "select",
    "signature": "select(propertySelectors, newProperties, retainGeometry)",
    "insertText": "select(${1:propertySelectors}, ${2:newProperties}, ${3:retainGeometry})",
    "doc": "Select properties from each Feature in a collection. It is also possible to call this function with only string arguments; they will be all be interpreted as propertySelectors (varargs).",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "The serialized representation is returned as a String.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "set",
    "signature": "set(var_args)",
    "insertText": "set(${1:var_args})",
    "doc": "Returns the element with the specified properties overridden.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "size",
    "signature": "size()",
    "insertText": "size()",
    "doc": "Examples in both JavaScript and Python demonstrate its usage to count features in a filtered collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "sort",
    "signature": "sort(property, ascending)",
    "insertText": "sort(${1:property}, ${2:ascending})",
    "doc": "Sort a collection by the specified property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "style",
    "signature": "style(color, pointSize, pointShape, width, fillColor, styleProperty, neighborhood, lineType)",
    "insertText": "style(${1:color}, ${2:pointSize}, ${3:pointShape}, ${4:width}, ${5:fillColor}, ${6:styleProperty}, ${7:neighborhood}, ${8:lineType})",
    "doc": "Examples in JavaScript and Python demonstrate how to apply both collection-wide and feature-specific styling.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "toDictionary",
    "signature": "toDictionary(properties)",
    "insertText": "toDictionary(${1:properties})",
    "doc": "Usage examples are provided for both JavaScript in the Code Editor and Python in Colab.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "toList",
    "signature": "toList(count, offset)",
    "insertText": "toList(${1:count}, ${2:offset})",
    "doc": "Examples in JavaScript and Python demonstrate how to use the toList method to extract specific subsets of a FeatureCollection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.FeatureCollection",
    "name": "union",
    "signature": "union(maxError)",
    "insertText": "union(${1:maxError})",
    "doc": "Merges all geometries in a given collection into one and returns a collection containing a single feature with only an ID of 'union_result' and a geometry.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Filter",
    "name": "and",
    "signature": "and(var_args)",
    "insertText": "and(${1:var_args})",
    "doc": "Combine two or more filters using boolean AND.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "area",
    "signature": "area(min, max, maxError, geometrySelector)",
    "insertText": "area(${1:min}, ${2:max}, ${3:maxError}, ${4:geometrySelector})",
    "doc": "Returns a filter that passes if the specified geometry has an area within the given range (inclusive).",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Filter",
    "name": "bounds",
    "signature": "bounds(geometry, errorMargin)",
    "insertText": "bounds(${1:geometry}, ${2:errorMargin})",
    "doc": "Creates a filter that passes if the object's geometry intersects the given geometry.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "calendarRange",
    "signature": "calendarRange(start, end, field)",
    "insertText": "calendarRange(${1:start}, ${2:end}, ${3:field})",
    "doc": "Returns a filter that passes if the object's timestamp falls within the given range of a calendar field. The month , day_of_year , day_of_month , and day_of_week are 1-based. Times are assumed to be in UTC. Weeks are assumed to begin on Monday as day 1. If end < start then this tests for value >= start OR value <= end , to allow for wrapping.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "contains",
    "signature": "contains(leftField, rightValue, rightField, leftValue, maxError)",
    "insertText": "contains(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue}, ${5:maxError})",
    "doc": "Creates a unary or binary filter that passes if the left geometry contains the right geometry (empty geometries are not contained in anything).",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "date",
    "signature": "date(start, end)",
    "insertText": "date(${1:start}, ${2:end})",
    "doc": "Filter a collection by date range. The start and end may be Dates, numbers",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "dateRangeContains",
    "signature": "dateRangeContains(leftField, rightValue, rightField, leftValue)",
    "insertText": "dateRangeContains(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand, a date range, contains the right operand, a date.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "dayOfYear",
    "signature": "dayOfYear(start, end)",
    "insertText": "dayOfYear(${1:start}, ${2:end})",
    "doc": "Returns a filter that passes if the object's timestamp falls within the given day-of-year range.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "disjoint",
    "signature": "disjoint(leftField, rightValue, rightField, leftValue, maxError)",
    "insertText": "disjoint(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue}, ${5:maxError})",
    "doc": "Creates a unary or binary filter that passes unless the left geometry intersects the right geometry.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "eq",
    "signature": "eq(name, value)",
    "insertText": "eq(${1:name}, ${2:value})",
    "doc": "Filter to metadata equal to the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "equals",
    "signature": "equals(leftField, rightValue, rightField, leftValue)",
    "insertText": "equals(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Examples demonstrate using ee.Filter.equals to filter feature collections and as a filter in joins.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Filter",
    "name": "expression",
    "signature": "expression(expression)",
    "insertText": "expression(${1:expression})",
    "doc": "Constructs a filter tree from a string.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Filter",
    "name": "greaterThan",
    "signature": "greaterThan(leftField, rightValue, rightField, leftValue)",
    "insertText": "greaterThan(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "The function can be used to filter a FeatureCollection based on the relationship between property values.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "greaterThanOrEquals",
    "signature": "greaterThanOrEquals(leftField, rightValue, rightField, leftValue)",
    "insertText": "greaterThanOrEquals(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "The example code demonstrates how to use this filter, along with other relational filters, to compare feature properties and filter a FeatureCollection.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "gt",
    "signature": "gt(name, value)",
    "insertText": "gt(${1:name}, ${2:value})",
    "doc": "Filter on metadata greater than the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "gte",
    "signature": "gte(name, value)",
    "insertText": "gte(${1:name}, ${2:value})",
    "doc": "Filter on metadata greater than or equal to the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "hasType",
    "signature": "hasType(leftField, rightValue, rightField, leftValue)",
    "insertText": "hasType(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand has the type, or is a subtype of the type named in the right operand.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "inList",
    "signature": "inList(leftField, rightValue, rightField, leftValue)",
    "insertText": "inList(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Filter on metadata contained in a list.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "intersects",
    "signature": "intersects(leftField, rightValue, rightField, leftValue, maxError)",
    "insertText": "intersects(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue}, ${5:maxError})",
    "doc": "Creates a unary or binary filter that passes if the left geometry intersects the right geometry.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "isContained",
    "signature": "isContained(leftField, rightValue, rightField, leftValue, maxError)",
    "insertText": "isContained(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue}, ${5:maxError})",
    "doc": "Creates a unary or binary filter that passes if the right geometry contains the left geometry (empty geometries are not contained in anything).",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "lessThan",
    "signature": "lessThan(leftField, rightValue, rightField, leftValue)",
    "insertText": "lessThan(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "The examples demonstrate how to use ee.Filter.lessThan to filter a FeatureCollection based on the relationship between feature properties or between a property and a constant value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "lessThanOrEquals",
    "signature": "lessThanOrEquals(leftField, rightValue, rightField, leftValue)",
    "insertText": "lessThanOrEquals(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "The function can be used to filter collections based on the comparison of two properties or a property and a constant value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "listContains",
    "signature": "listContains(leftField, rightValue, rightField, leftValue)",
    "insertText": "listContains(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand, a list, contains the right operand.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "lt",
    "signature": "lt(name, value)",
    "insertText": "lt(${1:name}, ${2:value})",
    "doc": "Filter to metadata less than the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "lte",
    "signature": "lte(name, value)",
    "insertText": "lte(${1:name}, ${2:value})",
    "doc": "Filter on metadata less than or equal to the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "maxDifference",
    "signature": "maxDifference(difference, leftField, rightValue, rightField, leftValue)",
    "insertText": "maxDifference(${1:difference}, ${2:leftField}, ${3:rightValue}, ${4:rightField}, ${5:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left and right operands, both numbers, are within a given maximum difference. If used as a join condition, this numeric difference is used as a join measure.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "neq",
    "signature": "neq(name, value)",
    "insertText": "neq(${1:name}, ${2:value})",
    "doc": "Filter to metadata not equal to the given value.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "not",
    "signature": "not()",
    "insertText": "not()",
    "doc": "Returns the opposite of the input filter, i.e. the resulting filter will match if and only if the input filter doesn't match.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "notEquals",
    "signature": "notEquals(leftField, rightValue, rightField, leftValue)",
    "insertText": "notEquals(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Examples demonstrate using ee.Filter.notEquals to filter a FeatureCollection based on the inequality of property values.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "notNull",
    "signature": "notNull(properties)",
    "insertText": "notNull(${1:properties})",
    "doc": "Returns a filter that passes if all the named properties are not null.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "or",
    "signature": "or(var_args)",
    "insertText": "or(${1:var_args})",
    "doc": "Combine two or more filters using boolean OR.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "rangeContains",
    "signature": "rangeContains(field, minValue, maxValue)",
    "insertText": "rangeContains(${1:field}, ${2:minValue}, ${3:maxValue})",
    "doc": "Returns a filter that passes if the value of the selected field is in the specified range (inclusive).",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Filter",
    "name": "stringContains",
    "signature": "stringContains(leftField, rightValue, rightField, leftValue)",
    "insertText": "stringContains(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand, a string, contains the right operand, also a string.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "stringEndsWith",
    "signature": "stringEndsWith(leftField, rightValue, rightField, leftValue)",
    "insertText": "stringEndsWith(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand, a string, ends with the right operand, also a string.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "stringStartsWith",
    "signature": "stringStartsWith(leftField, rightValue, rightField, leftValue)",
    "insertText": "stringStartsWith(${1:leftField}, ${2:rightValue}, ${3:rightField}, ${4:leftValue})",
    "doc": "Creates a unary or binary filter that passes if the left operand, a string, starts with the right operand, also a string.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Filter",
    "name": "withinDistance",
    "signature": "withinDistance(distance, leftField, rightValue, rightField, leftValue, maxError)",
    "insertText": "withinDistance(${1:distance}, ${2:leftField}, ${3:rightValue}, ${4:rightField}, ${5:leftValue}, ${6:maxError})",
    "doc": "Creates a unary or binary filter that passes if the left geometry is within a specified distance of the right geometry. If used as a join condition, this distance is used as a join measure.",
    "kind": "method",
    "returnType": "ee.Filter"
  },
  {
    "receiver": "ee.Geometry",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "BBox",
    "signature": "BBox(west, south, east, north)",
    "insertText": "BBox(${1:west}, ${2:south}, ${3:east}, ${4:north})",
    "doc": "+180; otherwise they will be treated as designating points on a circle (e.g. east may be numerically less than west).",
    "kind": "method",
    "returnType": "ee.Geometry.BBox"
  },
  {
    "receiver": "ee.Geometry",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "By default, the returned bounding box is in EPSG:4326 projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry is contained in the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Returns a GeoJSON-style list of the geometry's coordinates.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the result of subtracting the 'right' geometry from the 'left' geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result is a boolean indicating whether the geometries are disjoint.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "The spherical parameter determines whether calculations are done on a unit sphere or elliptically, and it is ignored if proj is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "The examples demonstrate how to use this method in both JavaScript and Python to check the geodesic property of geometry edges and display the geometry on a map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "fromS2CellId",
    "signature": "fromS2CellId(cellId)",
    "insertText": "fromS2CellId(${1:cellId})",
    "doc": "Constructs the Polygon corresponding to an S2 cell id.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "fromS2CellToken",
    "signature": "fromS2CellToken(cellToken)",
    "insertText": "fromS2CellToken(${1:cellToken})",
    "doc": "Constructs the Polygon corresponding to an S2 cell id as a hex string.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "The geodesic() method can be applied to a Geometry object and its output can be printed or displayed on a map as demonstrated in JavaScript and Python examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The proj argument specifies the projection in which to perform the intersection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Boolean value indicating whether the geometries intersect.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The method takes a Geometry object as input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "LinearRing",
    "signature": "LinearRing(coords, proj, geodesic, maxError)",
    "insertText": "LinearRing(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:maxError})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating geodesic EPSG:4326 LinearRings given an even number of arguments, e.g. ee.Geometry.LinearRing(aLng, aLat, bLng, bLat, ..., aLng, aLat).",
    "kind": "method",
    "returnType": "ee.Geometry.LinearRing"
  },
  {
    "receiver": "ee.Geometry",
    "name": "LineString",
    "signature": "LineString(coords, proj, geodesic, maxError)",
    "insertText": "LineString(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:maxError})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating geodesic EPSG:4326 LineStrings given an even number of arguments, e.g. ee.Geometry.LineString(aLng, aLat, bLng, bLat, ...).",
    "kind": "method",
    "returnType": "ee.Geometry.LineString"
  },
  {
    "receiver": "ee.Geometry",
    "name": "MultiLineString",
    "signature": "MultiLineString(coords, proj, geodesic, maxError)",
    "insertText": "MultiLineString(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:maxError})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating geodesic EPSG:4326 MultiLineStrings with a single LineString, given an even number of arguments, e.g. ee.Geometry.MultiLineString(aLng, aLat, bLng, bLat, ...).",
    "kind": "method",
    "returnType": "ee.Geometry.MultiLineString"
  },
  {
    "receiver": "ee.Geometry",
    "name": "MultiPoint",
    "signature": "MultiPoint(coords, proj)",
    "insertText": "MultiPoint(${1:coords}, ${2:proj})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating EPSG:4326 MultiPoints given an even number of arguments, e.g. ee.Geometry.MultiPoint(aLng, aLat, bLng, bLat, ...).",
    "kind": "method",
    "returnType": "ee.Geometry.MultiPoint"
  },
  {
    "receiver": "ee.Geometry",
    "name": "MultiPolygon",
    "signature": "MultiPolygon(coords, proj, geodesic, maxError, evenOdd)",
    "insertText": "MultiPolygon(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:maxError}, ${5:evenOdd})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating geodesic EPSG:4326 MultiPolygons with a single Polygon with a single LinearRing given an even number of arguments, e.g. ee.Geometry.MultiPolygon(aLng, aLat, bLng, bLat, ..., aLng, aLat).",
    "kind": "method",
    "returnType": "ee.Geometry.MultiPolygon"
  },
  {
    "receiver": "ee.Geometry",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "The method can take optional maxError and proj arguments to specify the maximum tolerated error for reprojection and the desired output projection, respectively.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "Point",
    "signature": "Point(coords, proj)",
    "insertText": "Point(${1:coords}, ${2:proj})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating EPSG:4326 points, e.g. ee.Geometry.Point(lng, lat).",
    "kind": "method",
    "returnType": "ee.Geometry.Point"
  },
  {
    "receiver": "ee.Geometry",
    "name": "Polygon",
    "signature": "Polygon(coords, proj, geodesic, maxError, evenOdd)",
    "insertText": "Polygon(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:maxError}, ${5:evenOdd})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating geodesic EPSG:4326 Polygons with a single LinearRing given an even number of arguments, e.g. ee.Geometry.Polygon(aLng, aLat, bLng, bLat, ..., aLng, aLat).",
    "kind": "method",
    "returnType": "ee.Geometry.Polygon"
  },
  {
    "receiver": "ee.Geometry",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate usage.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry",
    "name": "Rectangle",
    "signature": "Rectangle(coords, proj, geodesic, evenOdd)",
    "insertText": "Rectangle(${1:coords}, ${2:proj}, ${3:geodesic}, ${4:evenOdd})",
    "doc": "For convenience, varargs may be used when all arguments are numbers. This allows creating EPSG:4326 Polygons given exactly four coordinates, e.g. ee.Geometry.Rectangle(minLng, minLat, maxLng, maxLat).",
    "kind": "method",
    "returnType": "ee.Geometry.Rectangle"
  },
  {
    "receiver": "ee.Geometry",
    "name": "s2Cell",
    "signature": "s2Cell(cellId)",
    "insertText": "s2Cell(${1:cellId})",
    "doc": "Constructs the Polygon corresponding to an S2 cell id.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided in both JavaScript and Python for applying the serialize method and displaying the result and geometry on a map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a new Geometry object representing the symmetric difference.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "Examples are provided in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "The toGeoJSONString method is applied to a Geometry instance.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the type() method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The union method is available in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The method returns a boolean value indicating whether the geometries are within the specified distance.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "The method is demonstrated with both JavaScript and Python examples.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The operation is performed in a spherical coordinate system by default if no projection is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The maxError argument specifies the maximum tolerated error during reprojection, and proj specifies the projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Returns a GeoJSON-style list of the geometry's coordinates.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The 'proj' argument specifies the projection in which to perform the operation, with a default value of null.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Example usage in JavaScript and Python demonstrates how to define geometries, apply the disjoint method, and display the results.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples demonstrate using the distance method in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result is a Geometry object representing the overlapping area of the two input geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The maxError argument sets the maximum tolerated error during reprojection, and proj specifies the projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The examples demonstrate applying isUnbounded() to a BBox geometry in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "The examples demonstrate how to use the projection() method in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided for both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The output of the symmetricDifference method is a Geometry object.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the usage and output of toGeoJSON() .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Returns a GeoJSON string representation of the geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "Examples are provided in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The left geometry is the BBox object on which the method is called, and right is the other geometry for the union operation.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.BBox",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The distance is measured in the units of the specified projection or in meters if no projection is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Example code is provided in both JavaScript and Python to demonstrate its usage.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry is contained in the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Example code is provided in both JavaScript and Python to demonstrate the usage of the contains method with a LinearRing and a BBox .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "The examples demonstrate how to use the coordinates() method on a LinearRing in both JavaScript and Python to obtain and print its coordinate list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Example code is provided in JavaScript and Python demonstrating how to use the difference method and visualize the results.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Optional arguments include maxError for error tolerance and proj for specifying the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Examples are provided in JavaScript and Python demonstrating how to use the dissolve method on a LinearRing object.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the distance method and display the geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Geometry object representing the intersection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The right argument is the geometry used as the right operand, and maxError is the maximum error tolerated during reprojection, while proj specifies the projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The isUnbounded() method on a LinearRing object returns a boolean indicating whether the geometry is unbounded.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the projection() method.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Example code is provided in both JavaScript and Python for demonstrating the usage of the serialize method on a LinearRing object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The provided examples demonstrate how to use the symmetricDifference method in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "The provided examples demonstrate how to use toGeoJSON() in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Examples are provided for both JavaScript and Python to demonstrate its usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "Examples show the usage of LinearRing.type() in both JavaScript and Python to get and print the geometry type.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The maxError argument specifies the maximum tolerated error during reprojection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LinearRing",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The method is available for use in both JavaScript and Python environments with Earth Engine.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Optional arguments include maxError for reprojection tolerance and proj to specify the output projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "An example demonstrates checking if a LineString is contained within a BBox.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Optional arguments maxError and proj can be used to specify error tolerance and projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Returns a GeoJSON-style list of the geometry's coordinates.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate the usage of the difference method with a LineString geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The examples demonstrate how to use the disjoint method with a LineString geometry and a BBox input in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples are provided for both JavaScript and Python environments, demonstrating how to use the method and visualize the geometries and results on a map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "The provided examples demonstrate applying geodesic() to a LineString in both JavaScript and Python and printing or displaying the resulting Boolean value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "It takes right (another geometry), optional maxError , and optional proj as arguments and returns a Geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the usage of the intersects method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating the usage of the isUnbounded() method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "This method is applicable to LineString geometries and returns a Projection object.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided for using serialize in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method can be used in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "Examples in JavaScript and Python demonstrate how to use toGeoJSON() and display the resulting geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "The content also includes information on setting up the Python environment for interactive development with geemap .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "The example code demonstrates how to use type() in both JavaScript and Python to get the geometry type.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method is available for LineString objects and returns a Geometry object.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.LineString",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The method is available for use in both JavaScript and Python environments with Earth Engine.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "The method is demonstrated with JavaScript and Python examples using a MultiLineString geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Arguments include the right operand geometry, an optional maximum error for reprojection, and an optional projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The examples demonstrate how to use the contains method in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate its usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method can be applied to a MultiLineString object to calculate the difference with another geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Optional arguments include maxError for reprojection tolerance and proj for specifying the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Examples are provided in JavaScript and Python demonstrating how to use the geometries() method on a MultiLineString .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result of the intersection method is a Geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result of the intersects method is a Boolean value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The isUnbounded() method for MultiLineString returns a Boolean indicating whether the geometry is unbounded.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Applying projection() to a MultiLineString returns a Projection object.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided in JavaScript and Python demonstrating how to use the serialize method and display the results.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the symmetric difference between two geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "This method is used on a MultiLineString geometry instance and returns a GeoJSONGeometry .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating how to use the method and display the geometry on a map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "For a MultiLineString , the type() method returns a String.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the union of the two geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiLineString",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The distance is measured in the units of the projected coordinate system if specified, otherwise in meters on the sphere.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "The method can be used with MultiPoint geometry and returns a Geometry object representing the bounding box.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result is a boolean indicating whether the left geometry is contained in the right geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry contains the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Applying MultiPoint.coordinates() results in a list of coordinates.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The 'proj' argument specifies the projection for the operation, defaulting to a spherical coordinate system if not provided.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Boolean value indicating whether the geometries are disjoint.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples are provided in JavaScript and Python demonstrating how to use the distance method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in both JavaScript and Python demonstrating its usage and visualization.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The maxError argument specifies the maximum allowed error during reprojection, while the proj argument specifies the projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "Examples demonstrate the usage of isUnbounded() in both JavaScript and Python, showing how to define a MultiPoint, apply the method, print the result, and optionally visualize the geometry on a map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate its usage.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "The usage of the serialize method is demonstrated with JavaScript and Python examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The projection argument specifies the coordinate system for the operation, defaulting to spherical coordinates if not provided.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "The examples demonstrate how to use toGeoJSON() on a MultiPoint object in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Returns a GeoJSON string representation of the geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "The method can be applied to a MultiPoint object and returns \"MultiPoint\".",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The examples demonstrate how to use the union method in both JavaScript and Python, including defining inputs, applying the method, and displaying the results.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPoint",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The method can be applied to a MultiPoint object to check the distance to another geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "If no projection is specified, the result is in EPSG:4326.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The usage examples demonstrate how to apply containedIn to a MultiPolygon object in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry contains the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "This method is applicable to MultiPolygon objects and returns a list of coordinates.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the result of subtracting the 'right' geometry from the 'left' geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Optional arguments include maxError for tolerable error during reprojection and proj for specifying the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate how to use the dissolve method and visualize the results on a map.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Examples are provided for both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Geometry object representing the intersection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in JavaScript and Python demonstrating how to use the intersects method and visualize the geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The examples demonstrate its use in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "The method can be used in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "It can optionally accept a legacy boolean argument to enable a legacy format.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Geometry object representing the symmetric difference.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "Examples are provided for both JavaScript and Python to demonstrate the usage of the toGeoJSON() method and visualize the result.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Examples are provided for both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "The method requires the geometry itself as an argument.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The operation can be performed in a specified projection or a spherical coordinate system by default.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.MultiPolygon",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The distance is in the units of the specified projection or meters if no projection is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Example usage in JavaScript and Python demonstrates how to apply the bounds() method to a Point object and visualize the result.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The right argument is the geometry being checked for containment, while maxError and proj are optional parameters for error tolerance and projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry contains the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "The method can be used in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the result of subtracting the 'right' geometry from the 'left' geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The left operand of the operation is the geometry on which the method is called, while the right operand is the geometry provided as an argument.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "The calculation can be performed on a unit sphere or using an elliptical model, and an optional projection can be specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method returns a Geometry object representing the intersection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The output is a Boolean value indicating whether the geometries intersect.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "Examples show how to use the method in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Examples are provided for both JavaScript and Python, demonstrating how to use the method and display the results.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Example code is provided in both JavaScript and Python demonstrating the use of the serialize method on a Point object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result is a Geometry representing the symmetric difference.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "It is used on a Geometry instance and returns a GeoJSONGeometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "Examples are provided for both JavaScript and Python using Earth Engine to demonstrate the application of toGeoJSONString() on a Point geometry.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "It can be applied to any geometry object and is demonstrated with a Point object example.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "It returns a new Geometry object representing the union.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Point",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "Examples are provided for both JavaScript and Python to demonstrate the usage of the method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate usage.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The example code demonstrates how to use the containedIn method in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if one geometry contains the other.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "Applying the coordinates() method to a Polygon object in JavaScript or Python will yield its coordinate data.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Example code is provided in both JavaScript and Python to demonstrate the usage of the difference method with a Polygon.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns true if and only if the geometries are disjoint.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "Returns the minimum distance between two geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided for JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The method is demonstrated in both JavaScript and Python examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The this: geometry argument for this method is of the Geometry type.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Example code is provided for both JavaScript and Python to demonstrate usage and display results.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided in both JavaScript and Python showing how to define a polygon, apply the serialize method, and print/display the result.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The examples demonstrate how to use the symmetricDifference method in both JavaScript and Python to find the symmetric difference between a polygon and a bounding box and visualize the result on a map.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "Example code is provided in both JavaScript and Python for using toGeoJSON() on a Polygon object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "The examples demonstrate its use in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "Examples demonstrate how to use the type() method in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The result of the union method is a Geometry object.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Polygon",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "The method can be applied to a Polygon object and compared with another Geometry object like a Point .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "area",
    "signature": "area(maxError, proj)",
    "insertText": "area(${1:maxError}, ${2:proj})",
    "doc": "Returns the area of the geometry. Area of points and line strings is 0 and the area of multi geometries is the sum of the areas of their components (intersecting areas are counted multiple times).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Returns the bounding rectangle of the geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "buffer",
    "signature": "buffer(distance, maxError, proj)",
    "insertText": "buffer(${1:distance}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the input buffered by a given distance. If the distance is positive, the geometry is expanded, and if the distance is negative, the geometry is contracted.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "centroid",
    "signature": "centroid(maxError, proj)",
    "insertText": "centroid(${1:maxError}, ${2:proj})",
    "doc": "Returns a point at the center of the highest-dimension components of the geometry. Lower-dimensional components are ignored, so the centroid of a geometry containing two polygons, three lines and a point is equivalent to the centroid of a geometry containing just the two polygons.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "closestPoint",
    "signature": "closestPoint(right, maxError, proj)",
    "insertText": "closestPoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the point on the right input that is nearest to the left input. If either input is empty, null is returned. If both inputs are unbounded, an arbitrary point is returned. If one input is unbounded, an arbitrary point in the bounded input is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "closestPoints",
    "signature": "closestPoints(right, maxError, proj)",
    "insertText": "closestPoints(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns a dictionary containing up to two entries representing a point on each input geometry that is closest to the other input geometry. If either geometry is empty, an empty dictionary is returned. If both geometries are unbounded, the dictionary has an arbitrary point for both 'left' and 'right'. If one geometry is unbounded, the dictionary has an arbitrary point contained in the bounded geometry for both 'left' and 'right'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "containedIn",
    "signature": "containedIn(right, maxError, proj)",
    "insertText": "containedIn(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples are provided in both JavaScript and Python to demonstrate the usage of the containedIn method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "contains",
    "signature": "contains(right, maxError, proj)",
    "insertText": "contains(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Optional arguments include maxError for error tolerance during reprojection and proj for specifying the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "convexHull",
    "signature": "convexHull(maxError, proj)",
    "insertText": "convexHull(${1:maxError}, ${2:proj})",
    "doc": "Returns the convex hull of the given geometry. The convex hull of a single point is the point itself, the convex hull of collinear points is a line, and the convex hull of everything else is a polygon. Note that a degenerate polygon with all vertices on the same line will result in a line segment.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "coordinates",
    "signature": "coordinates()",
    "insertText": "coordinates()",
    "doc": "This method is applicable to Rectangle objects and returns a List .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "coveringGrid",
    "signature": "coveringGrid(proj, scale)",
    "insertText": "coveringGrid(${1:proj}, ${2:scale})",
    "doc": "Returns a collection of features that cover this geometry, where each feature is a rectangle in the grid defined by the given projection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "cutLines",
    "signature": "cutLines(distances, maxError, proj)",
    "insertText": "cutLines(${1:distances}, ${2:maxError}, ${3:proj})",
    "doc": "Converts LineString, MultiLineString, and LinearRing geometries into a MultiLineString by cutting them into parts no longer than the given distance along their length. All other geometry types will be converted to an empty MultiLineString.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "difference",
    "signature": "difference(right, maxError, proj)",
    "insertText": "difference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the result of subtracting the 'right' geometry from the 'left' geometry.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "disjoint",
    "signature": "disjoint(right, maxError, proj)",
    "insertText": "disjoint(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "An optional proj parameter can be used to specify the projection for the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "dissolve",
    "signature": "dissolve(maxError, proj)",
    "insertText": "dissolve(${1:maxError}, ${2:proj})",
    "doc": "Returns the union of the geometry. This leaves single geometries untouched, and unions multi geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "distance",
    "signature": "distance(right, maxError, proj, spherical)",
    "insertText": "distance(${1:right}, ${2:maxError}, ${3:proj}, ${4:spherical})",
    "doc": "The returned value is a Float representing the minimum distance.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "edgesAreGeodesics",
    "signature": "edgesAreGeodesics()",
    "insertText": "edgesAreGeodesics()",
    "doc": "Returns true if the geometry edges, if any, are geodesics along a spherical model of the earth; if false, any edges are straight lines in the projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "geodesic",
    "signature": "geodesic()",
    "insertText": "geodesic()",
    "doc": "If false, edges are straight in the projection. If true, edges are curved to follow the shortest path on the surface of the Earth.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "Returns the list of geometries in a GeometryCollection, or a singleton list of the geometry for single geometries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "intersection",
    "signature": "intersection(right, maxError, proj)",
    "insertText": "intersection(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "maxError defines the maximum error allowed for reprojection, and proj sets the projection for the operation.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "intersects",
    "signature": "intersects(right, maxError, proj)",
    "insertText": "intersects(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "The proj argument is the projection in which to perform the operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "isUnbounded",
    "signature": "isUnbounded()",
    "insertText": "isUnbounded()",
    "doc": "The provided examples demonstrate using isUnbounded() on a Rectangle object in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "length",
    "signature": "length(maxError, proj)",
    "insertText": "length(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the linear parts of the geometry. Polygonal parts are ignored. The length of multi geometries is the sum of the lengths of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "perimeter",
    "signature": "perimeter(maxError, proj)",
    "insertText": "perimeter(${1:maxError}, ${2:proj})",
    "doc": "Returns the length of the perimeter of the polygonal parts of the geometry. The perimeter of multi geometries is the sum of the perimeters of their components.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Examples demonstrate how to use the method in JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "simplify",
    "signature": "simplify(maxError, proj)",
    "insertText": "simplify(${1:maxError}, ${2:proj})",
    "doc": "This overrides the default Earth Engine policy for propagating error margins, so regardless of the geometry accuracy requested from the output, the inputs will be requested with the error margin specified in the arguments to this algorithm. This results in consistent rendering at all zoom levels of a rendered vector map, but at lower zoom levels (i.e. zoomed out), the geometry won't be simplified, which may harm performance.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "symmetricDifference",
    "signature": "symmetricDifference(right, maxError, proj)",
    "insertText": "symmetricDifference(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Examples demonstrate how to use the method in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "toGeoJSON",
    "signature": "toGeoJSON()",
    "insertText": "toGeoJSON()",
    "doc": "The provided examples demonstrate applying toGeoJSON() to a Rectangle object in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "toGeoJSONString",
    "signature": "toGeoJSONString()",
    "insertText": "toGeoJSONString()",
    "doc": "The example code demonstrates how to use toGeoJSONString() with a Rectangle in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "transform",
    "signature": "transform(proj, maxError)",
    "insertText": "transform(${1:proj}, ${2:maxError})",
    "doc": "Transforms the geometry to a specific projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "type",
    "signature": "type()",
    "insertText": "type()",
    "doc": "For a Rectangle object, the type() method returns a String.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "union",
    "signature": "union(right, maxError, proj)",
    "insertText": "union(${1:right}, ${2:maxError}, ${3:proj})",
    "doc": "Returns the union of the two geometries.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Geometry.Rectangle",
    "name": "withinDistance",
    "signature": "withinDistance(right, distance, maxError, proj)",
    "insertText": "withinDistance(${1:right}, ${2:distance}, ${3:maxError}, ${4:proj})",
    "doc": "Distance units are in meters if no projection is specified, or in the units of the specified projected coordinate system.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "abs",
    "signature": "abs()",
    "insertText": "abs()",
    "doc": "Computes the absolute value of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "acos",
    "signature": "acos()",
    "insertText": "acos()",
    "doc": "Computes the arccosine in radians of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "add",
    "signature": "add(image2)",
    "insertText": "add(${1:image2})",
    "doc": "Adds the first value to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "addBands",
    "signature": "addBands(srcImg, names, overwrite)",
    "insertText": "addBands(${1:srcImg}, ${2:names}, ${3:overwrite})",
    "doc": "Returns an image containing all bands copied from the first input and selected bands from the second input, optionally overwriting bands in the first image with the same name. The new image has the metadata and footprint from the first input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "and",
    "signature": "and(image2)",
    "insertText": "and(${1:image2})",
    "doc": "Returns 1 if and only if both values are non-zero for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayAccum",
    "signature": "arrayAccum(axis, reducer)",
    "insertText": "arrayAccum(${1:axis}, ${2:reducer})",
    "doc": "Accumulates elements of each array pixel along the given axis, by setting each element of the result array pixel to the reduction of elements in that pixel along the given axis, up to and including the current position on the axis. May be used to make a cumulative sum, a monotonically increasing sequence, etc.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayArgmax",
    "signature": "arrayArgmax()",
    "insertText": "arrayArgmax()",
    "doc": "Computes the positional indices of the maximum value in image of array values. If there are multiple occurrences of the maximum, the indices reflect the first.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayCat",
    "signature": "arrayCat(image2, axis)",
    "insertText": "arrayCat(${1:image2}, ${2:axis})",
    "doc": "Creates an array image by concatenating each array pixel along the given axis in each band.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayDimensions",
    "signature": "arrayDimensions()",
    "insertText": "arrayDimensions()",
    "doc": "Returns the number of dimensions in each array band, and 0 for scalar image bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayDotProduct",
    "signature": "arrayDotProduct(image2)",
    "insertText": "arrayDotProduct(${1:image2})",
    "doc": "The function returns an Image where each pixel's value is the dot product of the corresponding pixel's 1-D arrays from the input images.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayFlatten",
    "signature": "arrayFlatten(coordinateLabels, separator)",
    "insertText": "arrayFlatten(${1:coordinateLabels}, ${2:separator})",
    "doc": "Converts a single-band image of equal-shape multidimensional pixels to an image of scalar pixels, with one band for each element of the array.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayGet",
    "signature": "arrayGet(position)",
    "insertText": "arrayGet(${1:position})",
    "doc": "For each band, an output band of the same name is created with the value at the given position extracted from the input multidimensional pixel in that band.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayLength",
    "signature": "arrayLength(axis)",
    "insertText": "arrayLength(${1:axis})",
    "doc": "Image.arrayLength(axis) returns the length of each pixel's array along the specified axis.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayLengths",
    "signature": "arrayLengths()",
    "insertText": "arrayLengths()",
    "doc": "Returns a 1D array image with the length of each array axis.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayMask",
    "signature": "arrayMask(mask)",
    "insertText": "arrayMask(${1:mask})",
    "doc": "Creates an array image where each array-valued pixel is masked with another array-valued pixel, retaining only the elements where the mask is non-zero. If the mask image has one band it will be applied to all the bands of 'input', otherwise they must have the same number of bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayPad",
    "signature": "arrayPad(lengths, pad)",
    "insertText": "arrayPad(${1:lengths}, ${2:pad})",
    "doc": "Pads the array values in each pixel to be a fixed length. The pad value will be appended to each array to extend it to given length along each axis. All bands of the image must be array-valued and have the same dimensions.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayProject",
    "signature": "arrayProject(axes)",
    "insertText": "arrayProject(${1:axes})",
    "doc": "Projects the array in each pixel to a lower dimensional space by specifying the axes to retain. Dropped axes must be at most length 1.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayReduce",
    "signature": "arrayReduce(reducer, axes, fieldAxis)",
    "insertText": "arrayReduce(${1:reducer}, ${2:axes}, ${3:fieldAxis})",
    "doc": "For reducers with multiple outputs, additional dimensions or the fieldAxis parameter are needed to store the results.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayRepeat",
    "signature": "arrayRepeat(axis, copies)",
    "insertText": "arrayRepeat(${1:axis}, ${2:copies})",
    "doc": "Repeats each array pixel along the given axis. Each output pixel will have the shape of the input pixel, except length along the repeated axis, which will be multiplied by the number of copies.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayReshape",
    "signature": "arrayReshape(lengths, dimensions)",
    "insertText": "arrayReshape(${1:lengths}, ${2:dimensions})",
    "doc": "Converts array bands of an image with equally-shaped, possibly multidimensional pixels to an image of arrays with a new shape.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arraySlice",
    "signature": "arraySlice(axis, start, end, step)",
    "insertText": "arraySlice(${1:axis}, ${2:start}, ${3:end}, ${4:step})",
    "doc": "Creates a subarray by slicing out each position along the given axis from the 'start' (inclusive) to 'end' (exclusive) by increments of 'step'. The result will have as many dimensions as the input, and the same length in all directions except the slicing axis, where the length will be the number of positions from 'start' to 'end' by 'step' that are in range of the input array's length along 'axis'. This means the result can be length 0 along the given axis if start=end, or if the start or end values are entirely out of range.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arraySort",
    "signature": "arraySort(keys)",
    "insertText": "arraySort(${1:keys})",
    "doc": "For 2D arrays, a keys array image is required, and sorting can only be performed along a single axis at a time.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "arrayTranspose",
    "signature": "arrayTranspose(axis1, axis2)",
    "insertText": "arrayTranspose(${1:axis1}, ${2:axis2})",
    "doc": "The axis1 and axis2 arguments, defaulting to 0 and 1 respectively, determine which axes are swapped.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "asin",
    "signature": "asin()",
    "insertText": "asin()",
    "doc": "Computes the arcsine in radians of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "atan",
    "signature": "atan()",
    "insertText": "atan()",
    "doc": "Computes the arctangent in radians of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "atan2",
    "signature": "atan2(image2)",
    "insertText": "atan2(${1:image2})",
    "doc": "Calculates the angle formed by the 2D vector [x, y] for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bandNames",
    "signature": "bandNames()",
    "insertText": "bandNames()",
    "doc": "Returns a list containing the names of the bands of an image.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "bandTypes",
    "signature": "bandTypes()",
    "insertText": "bandTypes()",
    "doc": "Returns a dictionary of the image's band types.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Image",
    "name": "bitCount",
    "signature": "bitCount()",
    "insertText": "bitCount()",
    "doc": "Calculates the number of one-bits in the 64-bit two's complement binary representation of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bitsToArrayImage",
    "signature": "bitsToArrayImage()",
    "insertText": "bitsToArrayImage()",
    "doc": "Turns the bits of an integer into a 1-D array. The array has a length up to the highest 'on' bit in the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bitwiseAnd",
    "signature": "bitwiseAnd(image2)",
    "insertText": "bitwiseAnd(${1:image2})",
    "doc": "Calculates the bitwise AND of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bitwiseNot",
    "signature": "bitwiseNot()",
    "insertText": "bitwiseNot()",
    "doc": "Calculates the bitwise NOT of the input, in the smallest signed integer type that can hold the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bitwiseOr",
    "signature": "bitwiseOr(image2)",
    "insertText": "bitwiseOr(${1:image2})",
    "doc": "Calculates the bitwise OR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "bitwiseXor",
    "signature": "bitwiseXor(image2)",
    "insertText": "bitwiseXor(${1:image2})",
    "doc": "Calculates the bitwise XOR of the input values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "blend",
    "signature": "blend(top)",
    "insertText": "blend(${1:top})",
    "doc": "Overlays one image on top of another. The images are blended together using the masks as opacity. If either of images has only 1 band, it is replicated to match the number of bands in the other image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "byte",
    "signature": "byte()",
    "insertText": "byte()",
    "doc": "Casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cast",
    "signature": "cast(bandTypes, bandOrder)",
    "insertText": "cast(${1:bandTypes}, ${2:bandOrder})",
    "doc": "Casts some or all bands of an image to the specified types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cat",
    "signature": "cat(var_args)",
    "insertText": "cat(${1:var_args})",
    "doc": "Combines the given images into a single image which contains all bands from all of the images.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cbrt",
    "signature": "cbrt()",
    "insertText": "cbrt()",
    "doc": "Computes the cubic root of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "ceil",
    "signature": "ceil()",
    "insertText": "ceil()",
    "doc": "Computes the smallest integer greater than or equal to the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "changeProj",
    "signature": "changeProj(srcProj, dstProj)",
    "insertText": "changeProj(${1:srcProj}, ${2:dstProj})",
    "doc": "Tweaks the projection of the input image, moving each pixel from its location in srcProj to the same coordinates in dstProj.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "clamp",
    "signature": "clamp(low, high)",
    "insertText": "clamp(${1:low}, ${2:high})",
    "doc": "Clamps the values in all bands of an image to all lie within the specified range.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "classify",
    "signature": "classify(classifier, outputName)",
    "insertText": "classify(${1:classifier}, ${2:outputName})",
    "doc": "The example code demonstrates classifying a Sentinel-2 image for land cover using a random forest classifier trained on WorldCover data.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "clip",
    "signature": "clip(geometry)",
    "insertText": "clip(${1:geometry})",
    "doc": "Clips an image to a Geometry or Feature.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "clipToBoundsAndScale",
    "signature": "clipToBoundsAndScale(geometry, width, height, maxDimension, scale)",
    "insertText": "clipToBoundsAndScale(${1:geometry}, ${2:width}, ${3:height}, ${4:maxDimension}, ${5:scale})",
    "doc": "Clips an image to the bounds of a Geometry, and scales the clipped image to a particular size or scale.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "clipToCollection",
    "signature": "clipToCollection(collection)",
    "insertText": "clipToCollection(${1:collection})",
    "doc": "Clips an image to a FeatureCollection. The output bands correspond exactly the input bands, except data not covered by the geometry of at least one feature from the collection is masked. The output image retains the metadata of the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cluster",
    "signature": "cluster(clusterer, outputName)",
    "insertText": "cluster(${1:clusterer}, ${2:outputName})",
    "doc": "Applies a clusterer to an image. Returns a new image with a single band containing values from 0 to N, indicating the cluster each pixel is assigned to.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "connectedComponents",
    "signature": "connectedComponents(connectedness, maxSize)",
    "insertText": "connectedComponents(${1:connectedness}, ${2:maxSize})",
    "doc": "Finds connected components with the same value of the first band of the input and labels them with a globally unique value. Connectedness is specified by the given kernel. Objects larger than maxSize are considered background, and are masked.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "connectedPixelCount",
    "signature": "connectedPixelCount(maxSize, eightConnected)",
    "insertText": "connectedPixelCount(${1:maxSize}, ${2:eightConnected})",
    "doc": "Generate an image where each pixel contains the number of 4- or 8-connected neighbors (including itself).",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "constant",
    "signature": "constant(value)",
    "insertText": "constant(${1:value})",
    "doc": "You can also create a constant image using the shorthand ee.Image(value) .",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "convolve",
    "signature": "convolve(kernel)",
    "insertText": "convolve(${1:kernel})",
    "doc": "Convolves each band of an image with the given kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "copyProperties",
    "signature": "copyProperties(source, properties, exclude)",
    "insertText": "copyProperties(${1:source}, ${2:properties}, ${3:exclude})",
    "doc": "Copies metadata properties from one element to another.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "cos",
    "signature": "cos()",
    "insertText": "cos()",
    "doc": "Computes the cosine of the input in radians.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cosh",
    "signature": "cosh()",
    "insertText": "cosh()",
    "doc": "Computes the hyperbolic cosine of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "cumulativeCost",
    "signature": "cumulativeCost(source, maxDistance, geodeticDistance)",
    "insertText": "cumulativeCost(${1:source}, ${2:maxDistance}, ${3:geodeticDistance})",
    "doc": "Computes a cumulative cost map based on an image containing costs to traverse each pixel and an image containing source locations.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "date",
    "signature": "date()",
    "insertText": "date()",
    "doc": "Returns the acquisition time of an image as a Date object. This helper function is equivalent to ee.Date(image.get('system:time_start')) .",
    "kind": "method",
    "returnType": "ee.Date"
  },
  {
    "receiver": "ee.Image",
    "name": "derivative",
    "signature": "derivative()",
    "insertText": "derivative()",
    "doc": "For each band of the input image, the output image will have two bands named with the suffixes _x and _y , containing the respective derivatives.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "digamma",
    "signature": "digamma()",
    "insertText": "digamma()",
    "doc": "Computes the digamma function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "directionalDistanceTransform",
    "signature": "directionalDistanceTransform(angle, maxDistance, labelBand)",
    "insertText": "directionalDistanceTransform(${1:angle}, ${2:maxDistance}, ${3:labelBand})",
    "doc": "For each zero-valued pixel in the source, get the distance to the nearest non-zero pixels in the given direction.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "displace",
    "signature": "displace(displacement, mode, maxOffset)",
    "insertText": "displace(${1:displacement}, ${2:mode}, ${3:maxOffset})",
    "doc": "Warps an image using an image of displacements.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "displacement",
    "signature": "displacement(referenceImage, maxOffset, projection, patchWidth, stiffness)",
    "insertText": "displacement(${1:referenceImage}, ${2:maxOffset}, ${3:projection}, ${4:patchWidth}, ${5:stiffness})",
    "doc": "Determines displacements required to register an image to a reference image while allowing local, rubber sheet deformations. Displacements are computed in the CRS of the reference image, at a scale dictated by the lowest resolution of the following three projections: input image projection, reference image projection, and requested projection. The displacements are then transformed into the user-specified projection for output.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "distance",
    "signature": "distance(kernel, skipMasked)",
    "insertText": "distance(${1:kernel}, ${2:skipMasked})",
    "doc": "The provided examples demonstrate how to calculate distance to a target feature (water) using different distance kernels.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "divide",
    "signature": "divide(image2)",
    "insertText": "divide(${1:image2})",
    "doc": "Divides the first value by the second, returning 0 for division by 0 for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "double",
    "signature": "double()",
    "insertText": "double()",
    "doc": "Casts the input value to a 64-bit float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "entropy",
    "signature": "entropy(kernel)",
    "insertText": "entropy(${1:kernel})",
    "doc": "Computes the windowed entropy for each band using the specified kernel centered on each input pixel. Entropy is computed as -sum(p * log2(p)), where p is the normalized probability of occurrence of the values encountered in each window.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "eq",
    "signature": "eq(image2)",
    "insertText": "eq(${1:image2})",
    "doc": "Returns 1 if and only if the first value is equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "erf",
    "signature": "erf()",
    "insertText": "erf()",
    "doc": "Computes the error function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "erfc",
    "signature": "erfc()",
    "insertText": "erfc()",
    "doc": "Computes the complementary error function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "erfcInv",
    "signature": "erfcInv()",
    "insertText": "erfcInv()",
    "doc": "Computes the inverse complementary error function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "erfInv",
    "signature": "erfInv()",
    "insertText": "erfInv()",
    "doc": "Computes the inverse error function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "exp",
    "signature": "exp()",
    "insertText": "exp()",
    "doc": "Computes the Euler's number e raised to the power of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "expression",
    "signature": "expression(expression, map)",
    "insertText": "expression(${1:expression}, ${2:map})",
    "doc": "Evaluates an arithmetic expression on an image, possibly involving additional images.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "fastDistanceTransform",
    "signature": "fastDistanceTransform(neighborhood, units, metric)",
    "insertText": "fastDistanceTransform(${1:neighborhood}, ${2:units}, ${3:metric})",
    "doc": "Returns the distance, as determined by the specified distance metric, to the nearest non-zero valued pixel in the input. The output contains values for all pixels within the given neighborhood size, regardless of the input's mask. Note: the default distance metric returns squared distance.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "first",
    "signature": "first(image2)",
    "insertText": "first(${1:image2})",
    "doc": "Selects the value of the first value for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "firstNonZero",
    "signature": "firstNonZero(image2)",
    "insertText": "firstNonZero(${1:image2})",
    "doc": "Selects the first value if it is non-zero, and the second value otherwise for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "float",
    "signature": "float()",
    "insertText": "float()",
    "doc": "Casts the input value to a 32-bit float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "floor",
    "signature": "floor()",
    "insertText": "floor()",
    "doc": "Computes the largest integer less than or equal to the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "focalMax",
    "signature": "focalMax(radius, kernelType, units, iterations, kernel)",
    "insertText": "focalMax(${1:radius}, ${2:kernelType}, ${3:units}, ${4:iterations}, ${5:kernel})",
    "doc": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "focalMean",
    "signature": "focalMean(radius, kernelType, units, iterations, kernel)",
    "insertText": "focalMean(${1:radius}, ${2:kernelType}, ${3:units}, ${4:iterations}, ${5:kernel})",
    "doc": "Applies a morphological mean filter to each band of an image using a named or custom kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "focalMedian",
    "signature": "focalMedian(radius, kernelType, units, iterations, kernel)",
    "insertText": "focalMedian(${1:radius}, ${2:kernelType}, ${3:units}, ${4:iterations}, ${5:kernel})",
    "doc": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "focalMin",
    "signature": "focalMin(radius, kernelType, units, iterations, kernel)",
    "insertText": "focalMin(${1:radius}, ${2:kernelType}, ${3:units}, ${4:iterations}, ${5:kernel})",
    "doc": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "focalMode",
    "signature": "focalMode(radius, kernelType, units, iterations, kernel)",
    "insertText": "focalMode(${1:radius}, ${2:kernelType}, ${3:units}, ${4:iterations}, ${5:kernel})",
    "doc": "Applies a morphological reducer() filter to each band of an image using a named or custom kernel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "gamma",
    "signature": "gamma()",
    "insertText": "gamma()",
    "doc": "Computes the gamma function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "gammainc",
    "signature": "gammainc(image2)",
    "insertText": "gammainc(${1:image2})",
    "doc": "Calculates the regularized lower incomplete Gamma function ��(x,a) for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "geometry",
    "signature": "geometry(maxError, proj, geodesics)",
    "insertText": "geometry(${1:maxError}, ${2:proj}, ${3:geodesics})",
    "doc": "Returns the geometry of a given feature in a given projection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.Image",
    "name": "get",
    "signature": "get(property)",
    "insertText": "get(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getArray",
    "signature": "getArray(property)",
    "insertText": "getArray(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getDownloadURL",
    "signature": "getDownloadURL(params, callback)",
    "insertText": "getDownloadURL(${1:params}, ${2:callback})",
    "doc": "Get a download URL for small chunks of image data in GeoTIFF or NumPy format. Maximum request size is 32 MB, maximum grid dimension is 10000.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "An imperative function that returns information about this image via an AJAX call.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getMapId",
    "signature": "getMapId(visParams, callback)",
    "insertText": "getMapId(${1:visParams}, ${2:callback})",
    "doc": "Returns an object which may be passed to ee.data.getTileUrl or ui.Map.addLayer. Undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getNumber",
    "signature": "getNumber(property)",
    "insertText": "getNumber(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getString",
    "signature": "getString(property)",
    "insertText": "getString(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getThumbId",
    "signature": "getThumbId(params, callback)",
    "insertText": "getThumbId(${1:params}, ${2:callback})",
    "doc": "Returns the thumb ID and optional token, or null if a callback is specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "getThumbURL",
    "signature": "getThumbURL(params, callback)",
    "insertText": "getThumbURL(${1:params}, ${2:callback})",
    "doc": "Returns a thumbnail URL, or undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "glcmTexture",
    "signature": "glcmTexture(size, kernel, average)",
    "insertText": "glcmTexture(${1:size}, ${2:kernel}, ${3:average})",
    "doc": "Computes texture metrics from the Gray Level Co-occurrence Matrix around each pixel of every band. The GLCM is a tabulation of how often different combinations of pixel brightness values (grey levels) occur in an image. It counts the number of times a pixel of value X lies next to a pixel of value Y, in a particular direction and distance. and then derives statistics from this tabulation.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "gradient",
    "signature": "gradient()",
    "insertText": "gradient()",
    "doc": "Calculates the x and y gradient.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "gt",
    "signature": "gt(image2)",
    "insertText": "gt(${1:image2})",
    "doc": "Returns 1 if and only if the first value is greater than the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "gte",
    "signature": "gte(image2)",
    "insertText": "gte(${1:image2})",
    "doc": "Returns 1 if and only if the first value is greater than or equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "hersDescriptor",
    "signature": "hersDescriptor(selectors, buckets, peakWidthScale)",
    "insertText": "hersDescriptor(${1:selectors}, ${2:buckets}, ${3:peakWidthScale})",
    "doc": "Creates a dictionary of Histogram Error Ring Statistic (HERS) descriptor arrays from square array properties of an element. The HERS radius is taken to be the array's (side_length - 1) / 2.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Image",
    "name": "hersFeature",
    "signature": "hersFeature(reference, peakWidthScale)",
    "insertText": "hersFeature(${1:reference}, ${2:peakWidthScale})",
    "doc": "Computes the Histogram Error Ring Statistic (HERS) for each pixel in each band matching the keys in the descriptor. Only the bands for which HERS could be computed are returned.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "hersImage",
    "signature": "hersImage(image2, radius, buckets, peakWidthScale)",
    "insertText": "hersImage(${1:image2}, ${2:radius}, ${3:buckets}, ${4:peakWidthScale})",
    "doc": "Computes the Histogram Error Ring Statistic (HERS) for each pair of pixels in each band present in both images. Only the bands for which HERS could be computed are returned.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "hsvToRgb",
    "signature": "hsvToRgb()",
    "insertText": "hsvToRgb()",
    "doc": "Transforms the image from the HSV color space to the RGB color space. Expects a 3-band image in the range [0, 1], and produces 3 bands: red, green and blue with values in the range [0, 1].",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "hypot",
    "signature": "hypot(image2)",
    "insertText": "hypot(${1:image2})",
    "doc": "Calculates the magnitude of the 2D vector [x, y] for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "id",
    "signature": "id()",
    "insertText": "id()",
    "doc": "Returns the ID of a given element within a collection. Objects outside collections are not guaranteed to have IDs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "int",
    "signature": "int()",
    "insertText": "int()",
    "doc": "Casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "int16",
    "signature": "int16()",
    "insertText": "int16()",
    "doc": "Casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "int32",
    "signature": "int32()",
    "insertText": "int32()",
    "doc": "Casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "int64",
    "signature": "int64()",
    "insertText": "int64()",
    "doc": "Casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "int8",
    "signature": "int8()",
    "insertText": "int8()",
    "doc": "Casts the input value to a signed 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "interpolate",
    "signature": "interpolate(x, y, behavior)",
    "insertText": "interpolate(${1:x}, ${2:y}, ${3:behavior})",
    "doc": "Interpolates each point in the first band of the input image into the piecewise-linear function specified by the x and y arrays. The x values must be strictly increasing. If an input point is less than the first or greater than the last x value, then the output is specified by the \"behavior\" argument: \"extrapolate\" specifies the output value is extrapolated from the two nearest points, \"clamp\" specifies the output value is taken from the nearest point, \"input\" specifies the output value is copied from the input, and \"mask\" specifies the output value is masked.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "lanczos",
    "signature": "lanczos()",
    "insertText": "lanczos()",
    "doc": "Computes the Lanczos approximation of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "leftShift",
    "signature": "leftShift(image2)",
    "insertText": "leftShift(${1:image2})",
    "doc": "Calculates the left shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "linkCollection",
    "signature": "linkCollection(imageCollection, linkedBands, linkedProperties, matchPropertyName)",
    "insertText": "linkCollection(${1:imageCollection}, ${2:linkedBands}, ${3:linkedProperties}, ${4:matchPropertyName})",
    "doc": "This linking function is a convenience method for adding bands to a target image based on a specified shared metadata property and is intended to support linking collections that apply different processing/product generation to the same source imagery. For more expressive linking known as 'joining', see https://developers.google.com/earth-engine/guides/joins_intro.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "load",
    "signature": "load(id, version)",
    "insertText": "load(${1:id}, ${2:version})",
    "doc": "Returns the image given its ID.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "loadGeoTIFF",
    "signature": "loadGeoTIFF(uri)",
    "insertText": "loadGeoTIFF(${1:uri})",
    "doc": "Example code is provided for both JavaScript (Code Editor) and Python (Colab) to demonstrate how to load and display a GeoTIFF.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "loadZarrV2Array",
    "signature": "loadZarrV2Array(uri, proj, starts, ends)",
    "insertText": "loadZarrV2Array(${1:uri}, ${2:proj}, ${3:starts}, ${4:ends})",
    "doc": "Loads a Zarr v2 array as an Image. The array attributes (.zattrs) must contain the field '_ARRAY_DIMENSIONS', which is a list of the names of each dimension (e.g., ['time', 'y', 'x']). There must be at least two dimensions, with the final two representing Y and X respectively (e.g., ['lat', 'lon']). The supported compression codecs are 'blosc', 'gzip', 'lz4', 'zlib', and 'zstd'. The supported blosc meta-compression codecs are 'lz4', lz4hc', 'zlib', and 'zstd' ('blosclz' is not supported).",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "log",
    "signature": "log()",
    "insertText": "log()",
    "doc": "Computes the natural logarithm of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "log10",
    "signature": "log10()",
    "insertText": "log10()",
    "doc": "Computes the base-10 logarithm of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "long",
    "signature": "long()",
    "insertText": "long()",
    "doc": "Casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "lt",
    "signature": "lt(image2)",
    "insertText": "lt(${1:image2})",
    "doc": "Returns 1 if and only if the first value is less than the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "lte",
    "signature": "lte(image2)",
    "insertText": "lte(${1:image2})",
    "doc": "Returns 1 if and only if the first value is less than or equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "mask",
    "signature": "mask(mask)",
    "insertText": "mask(${1:mask})",
    "doc": "Gets or sets an image's mask. The output image retains the metadata and footprint of the input image. Pixels where the mask changes from zero to another value will be filled with zeros, or the values closest to zero within the range of the pixel type.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixCholeskyDecomposition",
    "signature": "matrixCholeskyDecomposition()",
    "insertText": "matrixCholeskyDecomposition()",
    "doc": "Calculates the Cholesky decomposition of a matrix. The Cholesky decomposition is a decomposition into the form L * L' where L is a lower triangular matrix. The input must be a symmetric positive-definite matrix. Returns an image with 1 band named 'L'.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixDeterminant",
    "signature": "matrixDeterminant()",
    "insertText": "matrixDeterminant()",
    "doc": "Computes the determinant of the matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixDiagonal",
    "signature": "matrixDiagonal()",
    "insertText": "matrixDiagonal()",
    "doc": "Computes the diagonal of the matrix in a single column.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixFnorm",
    "signature": "matrixFnorm()",
    "insertText": "matrixFnorm()",
    "doc": "Computes the Frobenius norm of the matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixIdentity",
    "signature": "matrixIdentity(size)",
    "insertText": "matrixIdentity(${1:size})",
    "doc": "Creates an image where each pixel is a 2D identity matrix of the given size.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixInverse",
    "signature": "matrixInverse()",
    "insertText": "matrixInverse()",
    "doc": "Computes the inverse of the matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixLUDecomposition",
    "signature": "matrixLUDecomposition()",
    "insertText": "matrixLUDecomposition()",
    "doc": "Calculates the LU matrix decomposition such that P��input=L��U, where L is lower triangular (with unit diagonal terms), U is upper triangular and P is a partial pivot permutation matrix. The input matrix must be square. Returns an image with bands named 'L', 'U' and 'P'.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixMultiply",
    "signature": "matrixMultiply(image2)",
    "insertText": "matrixMultiply(${1:image2})",
    "doc": "Returns the matrix multiplication A * B for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixPseudoInverse",
    "signature": "matrixPseudoInverse()",
    "insertText": "matrixPseudoInverse()",
    "doc": "Computes the Moore-Penrose pseudoinverse of the matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixQRDecomposition",
    "signature": "matrixQRDecomposition()",
    "insertText": "matrixQRDecomposition()",
    "doc": "Calculates the QR-decomposition of a matrix into two matrices Q and R such that input = QR, where Q is orthogonal, and R is upper triangular. Returns an image with bands named 'Q' and 'R'.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixSingularValueDecomposition",
    "signature": "matrixSingularValueDecomposition()",
    "insertText": "matrixSingularValueDecomposition()",
    "doc": "Calculates the Singular Value Decomposition of the input matrix into U��S��V', such that U and V are orthogonal and S is diagonal. Returns an image with bands named 'U', 'S' and 'V'.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixSolve",
    "signature": "matrixSolve(image2)",
    "insertText": "matrixSolve(${1:image2})",
    "doc": "Solves for x in the matrix equation A * x = B, finding a least-squares solution if A is overdetermined for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixToDiag",
    "signature": "matrixToDiag()",
    "insertText": "matrixToDiag()",
    "doc": "Computes a square diagonal matrix from a single column matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixTrace",
    "signature": "matrixTrace()",
    "insertText": "matrixTrace()",
    "doc": "Computes the trace of the matrix.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "matrixTranspose",
    "signature": "matrixTranspose(axis1, axis2)",
    "insertText": "matrixTranspose(${1:axis1}, ${2:axis2})",
    "doc": "Transposes two dimensions of each array pixel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "max",
    "signature": "max(image2)",
    "insertText": "max(${1:image2})",
    "doc": "Selects the maximum of the first and second values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "medialAxis",
    "signature": "medialAxis(neighborhood, units)",
    "insertText": "medialAxis(${1:neighborhood}, ${2:units})",
    "doc": "Computes the discrete medial axis of the zero valued pixels of the first band of the input. Outputs 4 bands:",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "metadata",
    "signature": "metadata(property, name)",
    "insertText": "metadata(${1:property}, ${2:name})",
    "doc": "Generates a constant image of type double from a metadata property.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "min",
    "signature": "min(image2)",
    "insertText": "min(${1:image2})",
    "doc": "Selects the minimum of the first and second values for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "mod",
    "signature": "mod(image2)",
    "insertText": "mod(${1:image2})",
    "doc": "Calculates the remainder of the first value divided by the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "multiply",
    "signature": "multiply(image2)",
    "insertText": "multiply(${1:image2})",
    "doc": "Multiplies the first value by the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "neighborhoodToArray",
    "signature": "neighborhoodToArray(kernel, defaultValue)",
    "insertText": "neighborhoodToArray(${1:kernel}, ${2:defaultValue})",
    "doc": "Turns the neighborhood of each pixel in a scalar image into a 2D array. Axes 0 and 1 of the output array correspond to Y and X axes of the image, respectively. The output image will have as many bands as the input; each output band has the same mask as the corresponding input band. The footprint and metadata of the input image are preserved.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "neighborhoodToBands",
    "signature": "neighborhoodToBands(kernel)",
    "insertText": "neighborhoodToBands(${1:kernel})",
    "doc": "Each input band produces x * y output bands. Each output band is named 'input_x_y' where x and y indicate the pixel's location in the kernel. For example, a 3x3 kernel operating on a 2-band image produces 18 output bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "neq",
    "signature": "neq(image2)",
    "insertText": "neq(${1:image2})",
    "doc": "Returns 1 if and only if the first value is not equal to the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "normalizedDifference",
    "signature": "normalizedDifference(bandNames)",
    "insertText": "normalizedDifference(${1:bandNames})",
    "doc": "Computes the normalized difference between two bands. If the bands to use are not specified, uses the first two bands. The normalized difference is computed as (first ? second) / (first + second). Note that the returned image band name is 'nd', the input image properties are not retained in the output image, and a negative pixel value in either input band will cause the output pixel to be masked. To avoid masking negative input values, use ee.Image.expression() to compute normalized difference.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "not",
    "signature": "not()",
    "insertText": "not()",
    "doc": "The examples demonstrate how to use the not() method in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "or",
    "signature": "or(image2)",
    "insertText": "or(${1:image2})",
    "doc": "Returns 1 if and only if either input value is non-zero for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is boolean.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "paint",
    "signature": "paint(featureCollection, color, width)",
    "insertText": "paint(${1:featureCollection}, ${2:color}, ${3:width})",
    "doc": "This algorithm is most suitable for converting categorical data from feature properties to pixels in an image; if you wish to visualize a collection, consider using FeatureCollection.style instead, which supports RGB colors whereas this algorithm is strictly 'monochrome' (using single numeric values).",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "pixelArea",
    "signature": "pixelArea()",
    "insertText": "pixelArea()",
    "doc": "Generate an image in which the value of each pixel is the area of that pixel in square meters. The returned image has a single band called \"area.\"",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "pixelCoordinates",
    "signature": "pixelCoordinates(projection)",
    "insertText": "pixelCoordinates(${1:projection})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "pixelLonLat",
    "signature": "pixelLonLat()",
    "insertText": "pixelLonLat()",
    "doc": "Creates an image with two bands named 'longitude' and 'latitude', containing the longitude and latitude at each pixel, in degrees.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "polynomial",
    "signature": "polynomial(coefficients)",
    "insertText": "polynomial(${1:coefficients})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "pow",
    "signature": "pow(image2)",
    "insertText": "pow(${1:image2})",
    "doc": "Raises the first value to the power of the second for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "projection",
    "signature": "projection()",
    "insertText": "projection()",
    "doc": "Returns the default projection of an Image. Throws an error if the bands of the image don't all have the same projection.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Image",
    "name": "propertyNames",
    "signature": "propertyNames()",
    "insertText": "propertyNames()",
    "doc": "Returns the names of properties on this element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "random",
    "signature": "random(seed, distribution)",
    "insertText": "random(${1:seed}, ${2:distribution})",
    "doc": "Generates a random number at each pixel location. When using the 'uniform' distribution, outputs are in the range of [0, 1). Using the 'normal' distribution, the outputs have ��=0, ��=1, but no explicit limits.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "randomVisualizer",
    "signature": "randomVisualizer()",
    "insertText": "randomVisualizer()",
    "doc": "Creates a visualization image by assigning a random color to each unique value of the pixels of the first band. The first three bands of the output image will contain 8-bit R, G and B values, followed by all bands of the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reduce",
    "signature": "reduce(reducer)",
    "insertText": "reduce(${1:reducer})",
    "doc": "The output image will have one band for each reducer output.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceConnectedComponents",
    "signature": "reduceConnectedComponents(reducer, labelBand, maxSize)",
    "insertText": "reduceConnectedComponents(${1:reducer}, ${2:labelBand}, ${3:maxSize})",
    "doc": "Applies a reducer to all of the pixels inside of each 'object'. Pixels are considered to belong to an object if they are connected (8-way) and have the same value in the 'label' band. The label band is only used to identify the connectedness; the rest are provided as inputs to the reducer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceNeighborhood",
    "signature": "reduceNeighborhood(reducer, kernel, inputWeight, skipMasked, optimization)",
    "insertText": "reduceNeighborhood(${1:reducer}, ${2:kernel}, ${3:inputWeight}, ${4:skipMasked}, ${5:optimization})",
    "doc": "Applies the given reducer to the neighborhood around each pixel, as determined by the given kernel. If the reducer has a single input, it will be applied separately to each band of the collection; otherwise it must have the same number of inputs as the input image has bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceRegion",
    "signature": "reduceRegion(reducer, geometry, scale, crs, crsTransform, bestEffort, maxPixels, tileScale)",
    "insertText": "reduceRegion(${1:reducer}, ${2:geometry}, ${3:scale}, ${4:crs}, ${5:crsTransform}, ${6:bestEffort}, ${7:maxPixels}, ${8:tileScale})",
    "doc": "Apply a reducer to all the pixels in a specific region.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceRegions",
    "signature": "reduceRegions(collection, reducer, scale, crs, crsTransform, tileScale, maxPixelsPerRegion)",
    "insertText": "reduceRegions(${1:collection}, ${2:reducer}, ${3:scale}, ${4:crs}, ${5:crsTransform}, ${6:tileScale}, ${7:maxPixelsPerRegion})",
    "doc": "Returns the input features, each augmented with the corresponding reducer outputs.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceResolution",
    "signature": "reduceResolution(reducer, bestEffort, maxPixels)",
    "insertText": "reduceResolution(${1:reducer}, ${2:bestEffort}, ${3:maxPixels})",
    "doc": "Enables reprojection using the given reducer to combine all input pixels corresponding to each output pixel. If the reducer has a single input, it will be applied separately to each band of the collection; otherwise it must have the same number of inputs as the input image has bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reduceToVectors",
    "signature": "reduceToVectors(reducer, geometry, scale, geometryType, eightConnected, labelProperty, crs, crsTransform, bestEffort, maxPixels, tileScale, geometryInNativeProjection)",
    "insertText": "reduceToVectors(${1:reducer}, ${2:geometry}, ${3:scale}, ${4:geometryType}, ${5:eightConnected}, ${6:labelProperty}, ${7:crs}, ${8:crsTransform}, ${9:bestEffort}, ${10:maxPixels}, ${11:tileScale}, ${12:geometryInNativeProjection})",
    "doc": "Convert an image to a feature collection by reducing homogeneous regions. Given an image containing a band of labeled segments and zero or more additional bands, runs a reducer over the pixels in each segment producing a feature per segment.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Image",
    "name": "regexpRename",
    "signature": "regexpRename(regex, replacement, all)",
    "insertText": "regexpRename(${1:regex}, ${2:replacement}, ${3:all})",
    "doc": "Renames the bands of an image by applying a regular expression replacement to the current band names. Any bands not matched by the regex will be copied over without renaming.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "register",
    "signature": "register(referenceImage, maxOffset, patchWidth, stiffness)",
    "insertText": "register(${1:referenceImage}, ${2:maxOffset}, ${3:patchWidth}, ${4:stiffness})",
    "doc": "Registers an image to a reference image while allowing local, rubber sheet deformations. Displacements are computed in the CRS of the reference image, at a scale dictated by the lowest resolution of the following three projections: input image projection, reference image projection, and requested projection. The displacements then applied to the input image to register it with the reference.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "remap",
    "signature": "remap(from, to, defaultValue, bandName)",
    "insertText": "remap(${1:from}, ${2:to}, ${3:defaultValue}, ${4:bandName})",
    "doc": "Maps from input values to output values, represented by two parallel lists. Any input values not included in the input list are either set to defaultValue if it is given or masked if it isn't. Note that inputs containing floating point values might sometimes fail to match due to floating point precision errors.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "rename",
    "signature": "rename(var_args)",
    "insertText": "rename(${1:var_args})",
    "doc": "Rename the bands of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "reproject",
    "signature": "reproject(crs, crsTransform, scale)",
    "insertText": "reproject(${1:crs}, ${2:crsTransform}, ${3:scale})",
    "doc": "Setting the default projection using ee.Image.setDefaultProjection is an alternative that does not force resampling like reproject does.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "resample",
    "signature": "resample(mode)",
    "insertText": "resample(${1:mode})",
    "doc": "An algorithm that returns an image identical to its argument, but which uses bilinear or bicubic interpolation (rather than the default nearest-neighbor) to compute pixels in projections other than its native projection or other levels of the same image pyramid.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "rgb",
    "signature": "rgb(r, g, b)",
    "insertText": "rgb(${1:r}, ${2:g}, ${3:b})",
    "doc": "Create a 3-band image specifically for visualization. This uses the first band in each image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "rgbToHsv",
    "signature": "rgbToHsv()",
    "insertText": "rgbToHsv()",
    "doc": "Transforms the image from the RGB color space to the HSV color space. Expects a 3-band image in the range [0, 1], and produces 3 bands: hue, saturation and value with values in the range [0, 1].",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "rightShift",
    "signature": "rightShift(image2)",
    "insertText": "rightShift(${1:image2})",
    "doc": "Calculates the signed right shift of v1 by v2 bits for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "round",
    "signature": "round()",
    "insertText": "round()",
    "doc": "Computes the integer nearest to the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "rsedTransform",
    "signature": "rsedTransform(neighborhood, units)",
    "insertText": "rsedTransform(${1:neighborhood}, ${2:units})",
    "doc": "Reverse Squared Euclidean Distance (RSED) computes the 2D maximal height surface created by placing an inverted parabola over each non-zero pixel of the input image, where the pixel's value is the height of the parabola. Viewed as a binary image (zero/not-zero) this is equivalent to buffering each non-zero input pixel by the square root of its value, in pixels.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "sample",
    "signature": "sample(region, scale, projection, factor, numPixels, seed, dropNulls, tileScale, geometries)",
    "insertText": "sample(${1:region}, ${2:scale}, ${3:projection}, ${4:factor}, ${5:numPixels}, ${6:seed}, ${7:dropNulls}, ${8:tileScale}, ${9:geometries})",
    "doc": "Samples the pixels of an image, returning them as a FeatureCollection. Each feature will have 1 property per band in the input image. Note that the default behavior is to drop features that intersect masked pixels, which result in null-valued properties (see dropNulls argument).",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Image",
    "name": "sampleRectangle",
    "signature": "sampleRectangle(region, properties, defaultValue, defaultArrayValue)",
    "insertText": "sampleRectangle(${1:region}, ${2:properties}, ${3:defaultValue}, ${4:defaultArrayValue})",
    "doc": "Extracts a rectangular region of pixels from an image into a ND array per band. The arrays are returned in a feature retaining the same properties as the image and a geometry the same as that used to sample the image (or the image footprint if unspecified). Each band is sampled in its input projection, and if no geometry is specified, sampled using its footprint. For scalar bands, the output array is 2D. For array bands the output array is (2+N)D where N is the number of dimensions in the original band. If sampling array bands, all arrays must have the same number of elements. If a band's sampled region is entirely masked and a default array value is specified, the default array value is used in-lieu of sampling the image.",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ee.Image",
    "name": "sampleRegions",
    "signature": "sampleRegions(collection, properties, scale, projection, tileScale, geometries)",
    "insertText": "sampleRegions(${1:collection}, ${2:properties}, ${3:scale}, ${4:projection}, ${5:tileScale}, ${6:geometries})",
    "doc": "Converts each pixel of an image (at a given scale) that intersects one or more regions to a Feature, returning them as a FeatureCollection. Each output feature will have one property per band of the input image, as well as any specified properties copied from the input feature.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Image",
    "name": "select",
    "signature": "select(var_args)",
    "insertText": "select(${1:var_args})",
    "doc": "Returns an image with the selected bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "selfMask",
    "signature": "selfMask()",
    "insertText": "selfMask()",
    "doc": "Updates an image's mask at all positions where the existing mask is not zero using the value of the image as the new mask value. The output image retains the metadata and footprint of the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "set",
    "signature": "set(var_args)",
    "insertText": "set(${1:var_args})",
    "doc": "Returns the element with the specified properties overridden.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Image",
    "name": "setDefaultProjection",
    "signature": "setDefaultProjection(crs, crsTransform, scale)",
    "insertText": "setDefaultProjection(${1:crs}, ${2:crsTransform}, ${3:scale})",
    "doc": "Set a default projection to be applied to this image. The projection's resolution may be overridden by later operations.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "short",
    "signature": "short()",
    "insertText": "short()",
    "doc": "Casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "signum",
    "signature": "signum()",
    "insertText": "signum()",
    "doc": "Computes the signum function (sign) of the input; 0 if the input is 0, 1 if the input is greater than 0, -1 if the input is less than 0.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "sin",
    "signature": "sin()",
    "insertText": "sin()",
    "doc": "Computes the sine of the input in radians.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "sinh",
    "signature": "sinh()",
    "insertText": "sinh()",
    "doc": "Computes the hyperbolic sine of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "sldStyle",
    "signature": "sldStyle(sldXml)",
    "insertText": "sldStyle(${1:sldXml})",
    "doc": "The output image will have histogram_bandname metadata if histogram equalization or normalization is requested.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "slice",
    "signature": "slice(start, end)",
    "insertText": "slice(${1:start}, ${2:end})",
    "doc": "Selects a contiguous group of bands from an image by position.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "spectralDilation",
    "signature": "spectralDilation(metric, kernel, useCentroid)",
    "insertText": "spectralDilation(${1:metric}, ${2:kernel}, ${3:useCentroid})",
    "doc": "Computes the spectral/spatial dilation of an image by computing the spectral distance of each pixel under a structuring kernel from the centroid of all pixels under the kernel and taking the most distant result. See 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "spectralDistance",
    "signature": "spectralDistance(image2, metric)",
    "insertText": "spectralDistance(${1:image2}, ${2:metric})",
    "doc": "Computes the per-pixel spectral distance between two images. If the images are array based then only the first band of each image is used; otherwise all bands are involved in the distance computation. The two images are therefore expected to contain the same number of bands or have the same 1-dimensional array length.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "spectralErosion",
    "signature": "spectralErosion(metric, kernel, useCentroid)",
    "insertText": "spectralErosion(${1:metric}, ${2:kernel}, ${3:useCentroid})",
    "doc": "Computes the spectral/spatial erosion of an image by computing the spectral distance of each pixel under a structuring kernel from the centroid of all pixels under the kernel and taking the closest result. See 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "spectralGradient",
    "signature": "spectralGradient(metric, kernel, useCentroid)",
    "insertText": "spectralGradient(${1:metric}, ${2:kernel}, ${3:useCentroid})",
    "doc": "Computes the spectral gradient over all bands of an image (or the first band if the image is Array typed) by computing the per-pixel difference between the spectral erosion and dilation with a given structuring kernel and distance metric. See: Plaza, Antonio, et al. 'Spatial/spectral endmember extraction by multidimensional morphological operations.' IEEE transactions on geoscience and remote sensing 40.9 (2002): 2025-2041.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "sqrt",
    "signature": "sqrt()",
    "insertText": "sqrt()",
    "doc": "Computes the square root of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "stratifiedSample",
    "signature": "stratifiedSample(numPoints, classBand, region, scale, projection, seed, classValues, classPoints, dropNulls, tileScale, geometries)",
    "insertText": "stratifiedSample(${1:numPoints}, ${2:classBand}, ${3:region}, ${4:scale}, ${5:projection}, ${6:seed}, ${7:classValues}, ${8:classPoints}, ${9:dropNulls}, ${10:tileScale}, ${11:geometries})",
    "doc": "Extracts a stratified random sample of points from an image. Extracts the specified number of samples for each distinct value discovered within the 'classBand'. Returns a FeatureCollection of 1 Feature per extracted point, with each feature having 1 property per band in the input image. If there are less than the specified number of samples available for a given class value, then all of the points for that class will be included. Requires that the classBand contain integer values.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Image",
    "name": "subtract",
    "signature": "subtract(image2)",
    "insertText": "subtract(${1:image2})",
    "doc": "Subtracts the second value from the first for each matched pair of bands in image1 and image2. If either image1 or image2 has only 1 band, then it is used against all the bands in the other image. If the images have the same number of bands, but not the same names, they're used pairwise in the natural order. The output bands are named for the longer of the two inputs, or if they're equal in length, in image1's order. The type of the output pixels is the union of the input types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "tan",
    "signature": "tan()",
    "insertText": "tan()",
    "doc": "Computes the tangent of the input in radians.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "tanh",
    "signature": "tanh()",
    "insertText": "tanh()",
    "doc": "Computes the hyperbolic tangent of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toArray",
    "signature": "toArray(axis)",
    "insertText": "toArray(${1:axis})",
    "doc": "Concatenates pixels from each band into a single array per pixel. The result will be masked if any input bands are masked.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toByte",
    "signature": "toByte()",
    "insertText": "toByte()",
    "doc": "Casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toDictionary",
    "signature": "toDictionary(properties)",
    "insertText": "toDictionary(${1:properties})",
    "doc": "Extract properties from a feature as a dictionary.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.Image",
    "name": "toDouble",
    "signature": "toDouble()",
    "insertText": "toDouble()",
    "doc": "Casts the input value to a 64-bit float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toFloat",
    "signature": "toFloat()",
    "insertText": "toFloat()",
    "doc": "Casts the input value to a 32-bit float.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toInt",
    "signature": "toInt()",
    "insertText": "toInt()",
    "doc": "Casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toInt16",
    "signature": "toInt16()",
    "insertText": "toInt16()",
    "doc": "Casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toInt32",
    "signature": "toInt32()",
    "insertText": "toInt32()",
    "doc": "Casts the input value to a signed 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toInt64",
    "signature": "toInt64()",
    "insertText": "toInt64()",
    "doc": "Casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toInt8",
    "signature": "toInt8()",
    "insertText": "toInt8()",
    "doc": "Casts the input value to a signed 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toLong",
    "signature": "toLong()",
    "insertText": "toLong()",
    "doc": "Casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toShort",
    "signature": "toShort()",
    "insertText": "toShort()",
    "doc": "Casts the input value to a signed 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toUint16",
    "signature": "toUint16()",
    "insertText": "toUint16()",
    "doc": "Casts the input value to an unsigned 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toUint32",
    "signature": "toUint32()",
    "insertText": "toUint32()",
    "doc": "Casts the input value to an unsigned 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "toUint8",
    "signature": "toUint8()",
    "insertText": "toUint8()",
    "doc": "Casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "translate",
    "signature": "translate(x, y, units, proj)",
    "insertText": "translate(${1:x}, ${2:y}, ${3:units}, ${4:proj})",
    "doc": "Translate the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "trigamma",
    "signature": "trigamma()",
    "insertText": "trigamma()",
    "doc": "Computes the trigamma function of the input.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "uint16",
    "signature": "uint16()",
    "insertText": "uint16()",
    "doc": "Casts the input value to an unsigned 16-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "uint32",
    "signature": "uint32()",
    "insertText": "uint32()",
    "doc": "Casts the input value to an unsigned 32-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "uint8",
    "signature": "uint8()",
    "insertText": "uint8()",
    "doc": "Casts the input value to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "unitScale",
    "signature": "unitScale(low, high)",
    "insertText": "unitScale(${1:low}, ${2:high})",
    "doc": "Scales the input so that the range of input values [low, high] becomes [0, 1]. Values outside the range are NOT clamped. This algorithm always produces floating point pixels.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "unmask",
    "signature": "unmask(value, sameFootprint)",
    "insertText": "unmask(${1:value}, ${2:sameFootprint})",
    "doc": "Replaces mask and value of the input image with the mask and value of another image at all positions where the input mask is zero. The output image retains the metadata of the input image. By default, the output image also retains the footprint of the input, but setting sameFootprint to false allows to extend the footprint.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "unmix",
    "signature": "unmix(endmembers, sumToOne, nonNegative)",
    "insertText": "unmix(${1:endmembers}, ${2:sumToOne}, ${3:nonNegative})",
    "doc": "Unmix each pixel with the given endmembers, by computing the pseudo-inverse and multiplying it through each pixel. Returns an image of doubles with the same number of bands as endmembers.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "updateMask",
    "signature": "updateMask(mask)",
    "insertText": "updateMask(${1:mask})",
    "doc": "Updates an image's mask at all positions where the existing mask is not zero. The output image retains the metadata and footprint of the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "visualize",
    "signature": "visualize(bands, gain, bias, min, max, gamma, opacity, palette, forceRgbOutput)",
    "insertText": "visualize(${1:bands}, ${2:gain}, ${3:bias}, ${4:min}, ${5:max}, ${6:gamma}, ${7:opacity}, ${8:palette}, ${9:forceRgbOutput})",
    "doc": "Produces an RGB or grayscale visualization of an image. Each of the gain, bias, min, max and gamma arguments can take either a single value, which will be applied to all bands, or a list of values the same length as bands.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "where",
    "signature": "where(test, value)",
    "insertText": "where(${1:test}, ${2:value})",
    "doc": "The output bands have the same names as the input bands. The output type of each band is the larger of the input and value types. The output image retains the metadata and footprint of the input image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Image",
    "name": "zeroCrossing",
    "signature": "zeroCrossing()",
    "insertText": "zeroCrossing()",
    "doc": "Finds zero-crossings on each band of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_array",
    "signature": "aggregate_array(property)",
    "insertText": "aggregate_array(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating a list of all the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_count",
    "signature": "aggregate_count(property)",
    "insertText": "aggregate_count(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the number of non-null values of the property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_count_distinct",
    "signature": "aggregate_count_distinct(property)",
    "insertText": "aggregate_count_distinct(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the number of distinct values for the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_first",
    "signature": "aggregate_first(property)",
    "insertText": "aggregate_first(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the property value of the first object in the collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_histogram",
    "signature": "aggregate_histogram(property)",
    "insertText": "aggregate_histogram(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating a histogram of the selected property.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_max",
    "signature": "aggregate_max(property)",
    "insertText": "aggregate_max(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the maximum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_mean",
    "signature": "aggregate_mean(property)",
    "insertText": "aggregate_mean(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the mean of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_min",
    "signature": "aggregate_min(property)",
    "insertText": "aggregate_min(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the minimum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_product",
    "signature": "aggregate_product(property)",
    "insertText": "aggregate_product(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the product of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_sample_sd",
    "signature": "aggregate_sample_sd(property)",
    "insertText": "aggregate_sample_sd(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sample std. deviation of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_sample_var",
    "signature": "aggregate_sample_var(property)",
    "insertText": "aggregate_sample_var(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sample variance of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_stats",
    "signature": "aggregate_stats(property)",
    "insertText": "aggregate_stats(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sum, min, max, mean, sample standard deviation, sample variance, total standard deviation and total variance of the selected property.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_sum",
    "signature": "aggregate_sum(property)",
    "insertText": "aggregate_sum(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the sum of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_total_sd",
    "signature": "aggregate_total_sd(property)",
    "insertText": "aggregate_total_sd(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the total std. deviation of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aggregate_total_var",
    "signature": "aggregate_total_var(property)",
    "insertText": "aggregate_total_var(${1:property})",
    "doc": "Aggregates over a given property of the objects in a collection, calculating the total variance of the values of the selected property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "and",
    "signature": "and()",
    "insertText": "and()",
    "doc": "Reduces an image collection by setting each pixel to 1 if and only if all the non-masked values at that pixel are non-zero across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "bounds",
    "signature": "bounds(maxError, proj)",
    "insertText": "bounds(${1:maxError}, ${2:proj})",
    "doc": "Constructs a bounding box around the geometries in a collection.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "cast",
    "signature": "cast(bandTypes, bandOrder)",
    "insertText": "cast(${1:bandTypes}, ${2:bandOrder})",
    "doc": "Casts some or all bands of each image in an ImageCollection to the specified types.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "combine",
    "signature": "combine(secondary, overwrite)",
    "insertText": "combine(${1:secondary}, ${2:overwrite})",
    "doc": "Makes a new collection that is a copy of the images in primary, adding all the bands from the image in secondary with a matching ID. If there are no matching IDs, the resulting collection will be empty. This is equivalent to an inner join on ID with merging of the bands of the result.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "copyProperties",
    "signature": "copyProperties(source, properties, exclude)",
    "insertText": "copyProperties(${1:source}, ${2:properties}, ${3:exclude})",
    "doc": "Copies metadata properties from one element to another.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "count",
    "signature": "count()",
    "insertText": "count()",
    "doc": "Reduces an image collection by calculating the number of images with a valid mask at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "distance",
    "signature": "distance(searchRadius, maxError)",
    "insertText": "distance(${1:searchRadius}, ${2:maxError})",
    "doc": "Produces a DOUBLE image where each pixel is the distance in meters from the pixel center to the nearest Point, LineString, or polygonal boundary in the collection. Note distance is also measured within interiors of polygons. Pixels that are not within 'searchRadius' meters of a geometry will be masked out.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "distinct",
    "signature": "distinct(properties)",
    "insertText": "distinct(${1:properties})",
    "doc": "Removes duplicates from a collection. Note that duplicates are determined using a strong hash over the serialized form of the selected properties.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "draw",
    "signature": "draw(color, pointRadius, strokeWidth)",
    "insertText": "draw(${1:color}, ${2:pointRadius}, ${3:strokeWidth})",
    "doc": "Paints a vector collection for visualization. Not intended for use as input to other algorithms.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "errorMatrix",
    "signature": "errorMatrix(actual, predicted, order)",
    "insertText": "errorMatrix(${1:actual}, ${2:predicted}, ${3:order})",
    "doc": "Computes a 2D error matrix for a collection by comparing two columns of a collection: one containing the actual values, and one containing predicted values. The values are expected to be small contiguous integers, starting from 0. Axis 0 (the rows) of the matrix correspond to the actual values, and Axis 1 (the columns) to the predicted values.",
    "kind": "method",
    "returnType": "ee.ConfusionMatrix"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "filter",
    "signature": "filter(filter)",
    "insertText": "filter(${1:filter})",
    "doc": "Apply a filter to this collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "filterBounds",
    "signature": "filterBounds(geometry)",
    "insertText": "filterBounds(${1:geometry})",
    "doc": "Shortcut to filter a collection by intersection with geometry. Items in the collection with a footprint that fails to intersect the given geometry will be excluded.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "filterDate",
    "signature": "filterDate(start, end)",
    "insertText": "filterDate(${1:start}, ${2:end})",
    "doc": "Shortcut to filter a collection by a date range. The start and end may be Dates, numbers (interpreted as milliseconds since 1970-01-01T00:00:00Z), or strings (such as '1996-01-01T08:00'). Based on 'system:time_start'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "first",
    "signature": "first()",
    "insertText": "first()",
    "doc": "Examples are provided for using ImageCollection.first() in both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "flatten",
    "signature": "flatten()",
    "insertText": "flatten()",
    "doc": "Flattens collections of collections.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "formaTrend",
    "signature": "formaTrend(covariates, windowSize)",
    "insertText": "formaTrend(${1:covariates}, ${2:windowSize})",
    "doc": "The time series and covariate series are expected to contain a single band each, and the time series is expected to be evenly spaced in time. The output is 4 float bands: the long and short term trends, the t-test of the long term trend against the time series, and the Bruce Hansen test of parameter stability.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "fromImages",
    "signature": "fromImages(images)",
    "insertText": "fromImages(${1:images})",
    "doc": "A common use case is converting an image list resulting from a saveAll join operation into an image collection.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "geometry",
    "signature": "geometry(maxError)",
    "insertText": "geometry(${1:maxError})",
    "doc": "Extracts and merges the geometries of a collection. Requires that all the geometries in the collection share the projection and edge interpretation.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "get",
    "signature": "get(property)",
    "insertText": "get(${1:property})",
    "doc": "The result of get needs to be cast to the appropriate class (e.g., ee.Number , ee.String ) for further computation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getArray",
    "signature": "getArray(property)",
    "insertText": "getArray(${1:property})",
    "doc": "Extract a property from a feature.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getFilmstripThumbURL",
    "signature": "getFilmstripThumbURL(params, callback)",
    "insertText": "getFilmstripThumbURL(${1:params}, ${2:callback})",
    "doc": "Returns a thumbnail URL, or undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "An imperative function that returns all the known information about this collection via an AJAX call.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getMapId",
    "signature": "getMapId(visParams, callback)",
    "insertText": "getMapId(${1:visParams}, ${2:callback})",
    "doc": "Returns returns a map ID and optional token, which may be passed to ee.data.getTileUrl or ui.Map.addLayer. Undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getNumber",
    "signature": "getNumber(property)",
    "insertText": "getNumber(${1:property})",
    "doc": "The method returns a Number value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getRegion",
    "signature": "getRegion(geometry, scale, crs, crsTransform)",
    "insertText": "getRegion(${1:geometry}, ${2:scale}, ${3:crs}, ${4:crsTransform})",
    "doc": "Output an array of values for each [pixel, band, image] tuple in an ImageCollection. The output contains rows of id, lon, lat, time, and all bands for each image that intersects each pixel in the given region. Attempting to extract more than 1048576 values will result in an error.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getString",
    "signature": "getString(property)",
    "insertText": "getString(${1:property})",
    "doc": "The feature is the object to extract the property from, and the property is the specific key to extract.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "getVideoThumbURL",
    "signature": "getVideoThumbURL(params, callback)",
    "insertText": "getVideoThumbURL(${1:params}, ${2:callback})",
    "doc": "Returns a thumbnail URL, or undefined if a callback was specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "iterate",
    "signature": "iterate(algorithm, first)",
    "insertText": "iterate(${1:algorithm}, ${2:first})",
    "doc": "Applies a user-supplied function to each element of a collection. The user-supplied function is given two arguments: the current element, and the value returned by the previous call to iterate() or the first argument, for the first iteration. The result is the value returned by the final call to the user-supplied function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "limit",
    "signature": "limit(max, property, ascending)",
    "insertText": "limit(${1:max}, ${2:property}, ${3:ascending})",
    "doc": "Limit a collection to the specified number of elements, optionally sorting them by a specified property first.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "linkCollection",
    "signature": "linkCollection(imageCollection, linkedBands, linkedProperties, matchPropertyName)",
    "insertText": "linkCollection(${1:imageCollection}, ${2:linkedBands}, ${3:linkedProperties}, ${4:matchPropertyName})",
    "doc": "Links images in this collection to matching images from imageCollection .",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "load",
    "signature": "load(id, version)",
    "insertText": "load(${1:id}, ${2:version})",
    "doc": "Returns the image collection given its ID.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "loadZarrV2Array",
    "signature": "loadZarrV2Array(uri, proj, axis, starts, ends)",
    "insertText": "loadZarrV2Array(${1:uri}, ${2:proj}, ${3:axis}, ${4:starts}, ${5:ends})",
    "doc": "Loads a Zarr v2 array with 3 or more dimensions (i.e., 1 or more non-spatial dimensions) as an ImageCollection by slicing along a specified non-spatial axis. The array attributes (.zattrs) must contain the field '_ARRAY_DIMENSIONS', which is a list of the names of each dimension (e.g., ['time', 'y', 'x']). There must be at least two dimensions, with the final two representing Y and X respectively (e.g., ['lat', 'lon']). The supported compression codecs are 'blosc', 'gzip', 'lz4', 'zlib', and 'zstd'. The supported blosc meta-compression codecs are 'lz4', lz4hc', 'zlib', and 'zstd' ('blosclz' is not supported).",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "map",
    "signature": "map(algorithm, dropNulls)",
    "insertText": "map(${1:algorithm}, ${2:dropNulls})",
    "doc": "Maps an algorithm over a collection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "max",
    "signature": "max()",
    "insertText": "max()",
    "doc": "Reduces an image collection by calculating the maximum value of each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "mean",
    "signature": "mean()",
    "insertText": "mean()",
    "doc": "Reduces an image collection by calculating the mean of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "median",
    "signature": "median()",
    "insertText": "median()",
    "doc": "Reduces an image collection by calculating the median of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "merge",
    "signature": "merge(collection2)",
    "insertText": "merge(${1:collection2})",
    "doc": "Merges two image collections into one. The result has all the images that were in either collection.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "min",
    "signature": "min()",
    "insertText": "min()",
    "doc": "Reduces an image collection by calculating the minimum value of each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "mode",
    "signature": "mode()",
    "insertText": "mode()",
    "doc": "Reduces an image collection by calculating the most common value at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "mosaic",
    "signature": "mosaic()",
    "insertText": "mosaic()",
    "doc": "Prioritizes images last to first and fills invalid pixels with preceding valid pixels.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "or",
    "signature": "or()",
    "insertText": "or()",
    "doc": "Reduces an image collection by setting each pixel to 1 if and only if any of the non-masked values at that pixel are non-zero across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "product",
    "signature": "product()",
    "insertText": "product()",
    "doc": "Reduces an image collection by calculating the product of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "propertyNames",
    "signature": "propertyNames()",
    "insertText": "propertyNames()",
    "doc": "Returns the names of properties on this element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "qualityMosaic",
    "signature": "qualityMosaic(qualityBand)",
    "insertText": "qualityMosaic(${1:qualityBand})",
    "doc": "A common use case involves using an inverted cloud probability band as the quality metric to create a best-pixel mosaic.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "randomColumn",
    "signature": "randomColumn(columnName, seed, distribution, rowKeys)",
    "insertText": "randomColumn(${1:columnName}, ${2:seed}, ${3:distribution}, ${4:rowKeys})",
    "doc": "Adds a column of deterministic pseudorandom numbers to a collection. The outputs are double-precision floating point numbers. When using the 'uniform' distribution (default), outputs are in the range of [0, 1). Using the 'normal' distribution, outputs have ��=0, ��=1, but have no explicit limits.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "reduce",
    "signature": "reduce(reducer, parallelScale)",
    "insertText": "reduce(${1:reducer}, ${2:parallelScale})",
    "doc": "The reducer output names determine the names of the output bands: reducers with multiple inputs will use the output names directly, while reducers with a single input will prefix the output name with the input band name (e.g., '10_mean', '20_mean').",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "reduceColumns",
    "signature": "reduceColumns(reducer, selectors, weightSelectors)",
    "insertText": "reduceColumns(${1:reducer}, ${2:selectors}, ${3:weightSelectors})",
    "doc": "Apply a reducer to each element of a collection, using the given selectors to determine the inputs.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "reduceToImage",
    "signature": "reduceToImage(properties, reducer)",
    "insertText": "reduceToImage(${1:properties}, ${2:reducer})",
    "doc": "The method requires specifying the properties to select from each feature and a reducer to combine these properties into a final pixel value.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "remap",
    "signature": "remap(lookupIn, lookupOut, columnName)",
    "insertText": "remap(${1:lookupIn}, ${2:lookupOut}, ${3:columnName})",
    "doc": "Remaps the value of a specific property in a collection. Takes two parallel lists and maps values found in one to values in the other. Any element with a value that is not specified in the first list is dropped from the output collection.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "select",
    "signature": "select(selectors, names)",
    "insertText": "select(${1:selectors}, ${2:names})",
    "doc": "Returns the image collection with selected bands.",
    "kind": "method",
    "returnType": "ee.ImageCollection"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "set",
    "signature": "set(var_args)",
    "insertText": "set(${1:var_args})",
    "doc": "Returns the element with the specified properties overridden.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "size",
    "signature": "size()",
    "insertText": "size()",
    "doc": "Examples are provided in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "sort",
    "signature": "sort(property, ascending)",
    "insertText": "sort(${1:property}, ${2:ascending})",
    "doc": "Sort a collection by the specified property.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "style",
    "signature": "style(color, pointSize, pointShape, width, fillColor, styleProperty, neighborhood, lineType)",
    "insertText": "style(${1:color}, ${2:pointSize}, ${3:pointShape}, ${4:width}, ${5:fillColor}, ${6:styleProperty}, ${7:neighborhood}, ${8:lineType})",
    "doc": "Individual feature styles can be overridden using a styleProperty containing a dictionary of style values.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "sum",
    "signature": "sum()",
    "insertText": "sum()",
    "doc": "Reduces an image collection by calculating the sum of all values at each pixel across the stack of all matching bands. Bands are matched by name.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "toArray",
    "signature": "toArray()",
    "insertText": "toArray()",
    "doc": "Converts an image collection into an image of 2D arrays. At each pixel, the images that have valid (unmasked) values in all bands are laid out along the first axis of the array in the order they appear in the image collection. The bands of each image are laid out along the second axis of the array, in the order the bands appear in that image. The array element type will be the union of the types of each band.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "toArrayPerBand",
    "signature": "toArrayPerBand(axis)",
    "insertText": "toArrayPerBand(${1:axis})",
    "doc": "Concatenates multiple images into a single array image. The result will be masked if any input is masked.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "toBands",
    "signature": "toBands()",
    "insertText": "toBands()",
    "doc": "Converts a collection to a single multi-band image containing all of the bands of every image in the collection. Output bands are named by prefixing the existing band names with the image id from which it came (e.g., 'image1_band1'). Note: The maximum number of bands is 5000.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "toDictionary",
    "signature": "toDictionary(properties)",
    "insertText": "toDictionary(${1:properties})",
    "doc": "The examples demonstrate how to use toDictionary() in both JavaScript and Python to retrieve collection properties.",
    "kind": "method",
    "returnType": "ee.Dictionary"
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "toList",
    "signature": "toList(count, offset)",
    "insertText": "toList(${1:count}, ${2:offset})",
    "doc": "Using toList on large collections can consume significant time and memory, potentially leading to errors.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.ImageCollection",
    "name": "union",
    "signature": "union(maxError)",
    "insertText": "union(${1:maxError})",
    "doc": "Merges all geometries in a given collection into one and returns a collection containing a single feature with only an ID of 'union_result' and a geometry.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Join",
    "name": "apply",
    "signature": "apply(primary, secondary, condition)",
    "insertText": "apply(${1:primary}, ${2:secondary}, ${3:condition})",
    "doc": "Joins two collections.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Join",
    "name": "inner",
    "signature": "inner(primaryKey, secondaryKey, measureKey)",
    "insertText": "inner(${1:primaryKey}, ${2:secondaryKey}, ${3:measureKey})",
    "doc": "Returns a join that pairs elements from the primary collection with matching elements from the secondary collection. Each result has a 'primary' property that contains the element from the primary collection, and a 'secondary' property containing the matching element from the secondary collection. If measureKey is specified, the join measure is also attached to the object as a property.",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Join",
    "name": "inverted",
    "signature": "inverted()",
    "insertText": "inverted()",
    "doc": "Returns a join that produces the elements of the primary collection that match no elements of the secondary collection. No properties are added to the results.",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Join",
    "name": "saveAll",
    "signature": "saveAll(matchesKey, ordering, ascending, measureKey, outer)",
    "insertText": "saveAll(${1:matchesKey}, ${2:ordering}, ${3:ascending}, ${4:measureKey}, ${5:outer})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Join",
    "name": "saveBest",
    "signature": "saveBest(matchKey, measureKey, outer)",
    "insertText": "saveBest(${1:matchKey}, ${2:measureKey}, ${3:outer})",
    "doc": "Returns a join that pairs each element from the first collection with a matching element from the second collection. The match with the best join measure is added to each result as an additional property. Join measures are produced when withinDistance or maxDifference filters are used as the join condition.",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Join",
    "name": "saveFirst",
    "signature": "saveFirst(matchKey, ordering, ascending, measureKey, outer)",
    "insertText": "saveFirst(${1:matchKey}, ${2:ordering}, ${3:ascending}, ${4:measureKey}, ${5:outer})",
    "doc": "Returns a join that pairs each element from the first collection with a matching element from the second collection. The first match is added to the result as an additional property.",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Join",
    "name": "simple",
    "signature": "simple()",
    "insertText": "simple()",
    "doc": "Returns a join that produces the elements of the primary collection that match any element of the secondary collection. No properties are added to the results.",
    "kind": "method",
    "returnType": "ee.Join"
  },
  {
    "receiver": "ee.Kernel",
    "name": "add",
    "signature": "add(kernel2, normalize)",
    "insertText": "add(${1:kernel2}, ${2:normalize})",
    "doc": "The examples show how two kernels with different dimensions are added and the resulting kernel weights.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "chebyshev",
    "signature": "chebyshev(radius, units, normalize, magnitude)",
    "insertText": "chebyshev(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "The output weight matrix shows the calculated Chebyshev distances from the center of the kernel.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "circle",
    "signature": "circle(radius, units, normalize, magnitude)",
    "insertText": "circle(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "The magnitude argument scales each value in the kernel.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "compass",
    "signature": "compass(magnitude, normalize)",
    "insertText": "compass(${1:magnitude}, ${2:normalize})",
    "doc": "The kernel values can be normalized to sum to 1 using the normalize argument.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "cross",
    "signature": "cross(radius, units, normalize, magnitude)",
    "insertText": "cross(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "Examples are provided for both JavaScript and Python environments.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "diamond",
    "signature": "diamond(radius, units, normalize, magnitude)",
    "insertText": "diamond(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "Examples in both JavaScript and Python demonstrate how to use the ee.Kernel.diamond function and show the resulting kernel matrix.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "euclidean",
    "signature": "euclidean(radius, units, normalize, magnitude)",
    "insertText": "euclidean(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "Examples are provided for both JavaScript and Python, showing how to use the function and the resulting weight matrix.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "fixed",
    "signature": "fixed(width, height, weights, x, y, normalize)",
    "insertText": "fixed(${1:width}, ${2:height}, ${3:weights}, ${4:x}, ${5:y}, ${6:normalize})",
    "doc": "Examples in JavaScript and Python demonstrate how to create a fixed kernel using a list of weights.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "gaussian",
    "signature": "gaussian(radius, sigma, units, normalize, magnitude)",
    "insertText": "gaussian(${1:radius}, ${2:sigma}, ${3:units}, ${4:normalize}, ${5:magnitude})",
    "doc": "The examples demonstrate how to generate and print a Gaussian kernel in both JavaScript and Python.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "inverse",
    "signature": "inverse()",
    "insertText": "inverse()",
    "doc": "Returns a kernel which has each of its weights multiplicatively inverted. Weights with a value of zero are not inverted and remain zero.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "kirsch",
    "signature": "kirsch(magnitude, normalize)",
    "insertText": "kirsch(${1:magnitude}, ${2:normalize})",
    "doc": "The output is a Kernel object, usable in JavaScript and Python examples.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "laplacian4",
    "signature": "laplacian4(magnitude, normalize)",
    "insertText": "laplacian4(${1:magnitude}, ${2:normalize})",
    "doc": "Examples are provided for using the ee.Kernel.laplacian4() function in both the Earth Engine Code Editor (JavaScript) and a Colab notebook (Python).",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "laplacian8",
    "signature": "laplacian8(magnitude, normalize)",
    "insertText": "laplacian8(${1:magnitude}, ${2:normalize})",
    "doc": "The default output weights matrix is [[1, 1, 1], [1, -8, 1], [1, 1, 1]] .",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "manhattan",
    "signature": "manhattan(radius, units, normalize, magnitude)",
    "insertText": "manhattan(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "Examples in JavaScript and Python demonstrate how to create and print a Manhattan kernel with a radius of 3.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "octagon",
    "signature": "octagon(radius, units, normalize, magnitude)",
    "insertText": "octagon(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "The generated kernel is a boolean kernel, meaning its values are either 0 or 1 by default unless normalization or magnitude scaling is applied.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "plus",
    "signature": "plus(radius, units, normalize, magnitude)",
    "insertText": "plus(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "Generates a plus-shaped boolean kernel.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "prewitt",
    "signature": "prewitt(magnitude, normalize)",
    "insertText": "prewitt(${1:magnitude}, ${2:normalize})",
    "doc": "Generates a 3x3 Prewitt edge-detection kernel.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "rectangle",
    "signature": "rectangle(xRadius, yRadius, units, normalize, magnitude)",
    "insertText": "rectangle(${1:xRadius}, ${2:yRadius}, ${3:units}, ${4:normalize}, ${5:magnitude})",
    "doc": "The generated kernel is represented as a matrix of weights.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "roberts",
    "signature": "roberts(magnitude, normalize)",
    "insertText": "roberts(${1:magnitude}, ${2:normalize})",
    "doc": "The examples show how to use the ee.Kernel.roberts() function in both the Code Editor (JavaScript) and Colab (Python).",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "rotate",
    "signature": "rotate(rotations)",
    "insertText": "rotate(${1:rotations})",
    "doc": "Positive rotation values indicate clockwise rotation, and negative values indicate counterclockwise rotation.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "sobel",
    "signature": "sobel(magnitude, normalize)",
    "insertText": "sobel(${1:magnitude}, ${2:normalize})",
    "doc": "The default Sobel kernel has weights represented by the matrix [[-1, 0, 1], [-2, 0, 2], [-1, 0, 1]] .",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.Kernel",
    "name": "square",
    "signature": "square(radius, units, normalize, magnitude)",
    "insertText": "square(${1:radius}, ${2:units}, ${3:normalize}, ${4:magnitude})",
    "doc": "The normalize and magnitude arguments control the normalization and scaling of the kernel values.",
    "kind": "method",
    "returnType": "ee.Kernel"
  },
  {
    "receiver": "ee.List",
    "name": "add",
    "signature": "add(element)",
    "insertText": "add(${1:element})",
    "doc": "Examples in both JavaScript and Python demonstrate the functionality of the add method with different input types.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "cat",
    "signature": "cat(other)",
    "insertText": "cat(${1:other})",
    "doc": "Examples demonstrate concatenating lists with various elements, including nested lists and empty lists.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "contains",
    "signature": "contains(element)",
    "insertText": "contains(${1:element})",
    "doc": "Returns true if list contains element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "containsAll",
    "signature": "containsAll(other)",
    "insertText": "containsAll(${1:other})",
    "doc": "Returns true if list contains all of the elements of other, regardless of order.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "distinct",
    "signature": "distinct()",
    "insertText": "distinct()",
    "doc": "Returns a copy of list without duplicate elements.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "equals",
    "signature": "equals(other)",
    "insertText": "equals(${1:other})",
    "doc": "Returns true if list contains the same elements as other, in the same order.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "Asynchronously retrieves the value of this object from the server and passes it to the provided callback function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "filter",
    "signature": "filter(filter)",
    "insertText": "filter(${1:filter})",
    "doc": "Filters a list to only the elements that match the given filter. To filter list items that aren't images or features, test a property named 'item', e.g., ee.Filter.gt('item', 3).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "flatten",
    "signature": "flatten()",
    "insertText": "flatten()",
    "doc": "Flattens any sublists into a single list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "frequency",
    "signature": "frequency(element)",
    "insertText": "frequency(${1:element})",
    "doc": "Examples show how to use List.frequency in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "get",
    "signature": "get(index)",
    "insertText": "get(${1:index})",
    "doc": "Returns the element at the specified position in list. A negative index counts backwards from the end of the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "getArray",
    "signature": "getArray(index)",
    "insertText": "getArray(${1:index})",
    "doc": "Returns the array at the specified position in list. A negative index counts backwards from the end of the list. If the value is not a array, an error will occur.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "getGeometry",
    "signature": "getGeometry(index)",
    "insertText": "getGeometry(${1:index})",
    "doc": "Returns the geometry at the specified position in list. A negative index counts backwards from the end of the list. If the value is not a geometry, an error will occur.",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ee.List",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "getNumber",
    "signature": "getNumber(index)",
    "insertText": "getNumber(${1:index})",
    "doc": "Returns the number at the specified position in list. A negative index counts backwards from the end of the list. If the value is not a number, an error will occur.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "getString",
    "signature": "getString(index)",
    "insertText": "getString(${1:index})",
    "doc": "Returns the string at the specified position in list. A negative index counts backwards from the end of the list. If the value is not a string, an error will occur.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "indexOf",
    "signature": "indexOf(element)",
    "insertText": "indexOf(${1:element})",
    "doc": "Returns the position of the first occurrence of element in list, or -1 if list does not contain element.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "indexOfSublist",
    "signature": "indexOfSublist(target)",
    "insertText": "indexOfSublist(${1:target})",
    "doc": "Returns the starting position of the first occurrence of target within list, or -1 if there is no such occurrence.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "insert",
    "signature": "insert(index, element)",
    "insertText": "insert(${1:index}, ${2:element})",
    "doc": "Inserts element at the specified position in list. A negative index counts backwards from the end of the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "iterate",
    "signature": "iterate(function, first)",
    "insertText": "iterate(${1:function}, ${2:first})",
    "doc": "Iterate an algorithm over a list. The algorithm is expected to take two objects, the current list item, and the result from the previous iteration or the value of first for the first iteration.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "join",
    "signature": "join(separator)",
    "insertText": "join(${1:separator})",
    "doc": "Returns a string containing the elements of the list joined together with the specified separator between elements.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "lastIndexOfSubList",
    "signature": "lastIndexOfSubList(target)",
    "insertText": "lastIndexOfSubList(${1:target})",
    "doc": "Returns the starting position of the last occurrence of target within list, or -1 if there is no such occurrence.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "length",
    "signature": "length()",
    "insertText": "length()",
    "doc": "Returns the number of elements in list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "map",
    "signature": "map(baseAlgorithm, dropNulls)",
    "insertText": "map(${1:baseAlgorithm}, ${2:dropNulls})",
    "doc": "Map an algorithm over a list. The algorithm is expected to take an Object and return an Object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "reduce",
    "signature": "reduce(reducer)",
    "insertText": "reduce(${1:reducer})",
    "doc": "Apply a reducer to a list. If the reducer takes more than 1 input, then each element in the list is assumed to be a list of inputs. If the reducer returns a single output, it is returned directly, otherwise returns a dictionary containing the named reducer outputs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "remove",
    "signature": "remove(element)",
    "insertText": "remove(${1:element})",
    "doc": "Removes the first occurrence of the specified element from list, if it is present.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "removeAll",
    "signature": "removeAll(other)",
    "insertText": "removeAll(${1:other})",
    "doc": "Removes from list all of the elements that are contained in other list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "repeat",
    "signature": "repeat(value, count)",
    "insertText": "repeat(${1:value}, ${2:count})",
    "doc": "Returns a new list containing value repeated count times.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "replace",
    "signature": "replace(oldval, newval)",
    "insertText": "replace(${1:oldval}, ${2:newval})",
    "doc": "Replaces the first occurrence of oldval in list with newval.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "replaceAll",
    "signature": "replaceAll(oldval, newval)",
    "insertText": "replaceAll(${1:oldval}, ${2:newval})",
    "doc": "Replaces all occurrences of oldval in list with newval.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "reverse",
    "signature": "reverse()",
    "insertText": "reverse()",
    "doc": "Reverses the order of the elements in list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "rotate",
    "signature": "rotate(distance)",
    "insertText": "rotate(${1:distance})",
    "doc": "Rotates the elements of the list by the specified distance.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "sequence",
    "signature": "sequence(start, end, step, count)",
    "insertText": "sequence(${1:start}, ${2:end}, ${3:step}, ${4:count})",
    "doc": "Generate a sequence of numbers from start to end (inclusive) in increments of step, or in count equally-spaced increments. If end is not specified it is computed from start + step * count, so at least one of end or count must be specified.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Returns the serialized representation of this object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "set",
    "signature": "set(index, element)",
    "insertText": "set(${1:index}, ${2:element})",
    "doc": "Replaces the value at the specified position in list with element. A negative index counts backwards from the end of the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "shuffle",
    "signature": "shuffle(seed)",
    "insertText": "shuffle(${1:seed})",
    "doc": "Randomly permute the specified list. Note that the permutation order will always be the same for any given seed, unless the value for seed is 'false'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "size",
    "signature": "size()",
    "insertText": "size()",
    "doc": "Returns the number of elements in list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "slice",
    "signature": "slice(start, end, step)",
    "insertText": "slice(${1:start}, ${2:end}, ${3:step})",
    "doc": "Returns a portion of list between the start index, inclusive, and end index, exclusive. Negative values for start or end count backwards from the end of the list. Values greater than the size of the list are legal but are truncated to the size of list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "sort",
    "signature": "sort(keys)",
    "insertText": "sort(${1:keys})",
    "doc": "Sorts the list into ascending order. If the 'keys' argument is provided, then it is sorted first, and the elements of 'list' are placed in the same order.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "splice",
    "signature": "splice(start, count, other)",
    "insertText": "splice(${1:start}, ${2:count}, ${3:other})",
    "doc": "Starting at the start index, removes count elements from list and insert the contents of other at that location. If start is negative, it counts backwards from the end of the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "swap",
    "signature": "swap(pos1, pos2)",
    "insertText": "swap(${1:pos1}, ${2:pos2})",
    "doc": "Swaps the elements at the specified positions. A negative position counts backwards from the end of the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "unzip",
    "signature": "unzip()",
    "insertText": "unzip()",
    "doc": "Transposes a list of lists, extracting the first element of each inner list into one list the second elements into another, etc., up to the length of the shortest inner list. The remaining items are discarded. The result is a list of lists.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.List",
    "name": "zip",
    "signature": "zip(other)",
    "insertText": "zip(${1:other})",
    "doc": "Pairs the elements of two lists to create a list of two-element lists. When the input lists are of different sizes, the final list has the same size as the shortest one.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Model",
    "name": "fromVertexAi",
    "signature": "fromVertexAi(endpoint, inputProperties, inputTypeOverride, inputShapes, proj, fixInputProj, inputTileSize, inputOverlapSize, outputTileSize, outputBands, outputProperties, outputMultiplier, maxPayloadBytes, payloadFormat)",
    "insertText": "fromVertexAi(${1:endpoint}, ${2:inputProperties}, ${3:inputTypeOverride}, ${4:inputShapes}, ${5:proj}, ${6:fixInputProj}, ${7:inputTileSize}, ${8:inputOverlapSize}, ${9:outputTileSize}, ${10:outputBands}, ${11:outputProperties}, ${12:outputMultiplier}, ${13:maxPayloadBytes}, ${14:payloadFormat})",
    "doc": "It requires specifying the Vertex AI endpoint name and supports various optional arguments for configuring input and output properties, types, shapes, projections, tiling, bands, and payload settings.",
    "kind": "method",
    "returnType": "ee.Model"
  },
  {
    "receiver": "ee.Model",
    "name": "predictImage",
    "signature": "predictImage(image)",
    "insertText": "predictImage(${1:image})",
    "doc": "The model will receive 0s in place of masked pixels. The masks of predicted output bands are the minimum of the masks of the inputs.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Model",
    "name": "predictProperties",
    "signature": "predictProperties(collection)",
    "insertText": "predictProperties(${1:collection})",
    "doc": "Make predictions for each feature in a collection. Predicted properties are merged with the properties of the input feature.",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ee.Number",
    "name": "abs",
    "signature": "abs()",
    "insertText": "abs()",
    "doc": "It takes a single number input and returns its absolute value as a number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "acos",
    "signature": "acos()",
    "insertText": "acos()",
    "doc": "The input value for the arccosine method must be within the domain of [-1, 1].",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "add",
    "signature": "add(right)",
    "insertText": "add(${1:right})",
    "doc": "Examples are provided in both JavaScript and Python, demonstrating how to use the add() method with different numeric values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "and",
    "signature": "and(right)",
    "insertText": "and(${1:right})",
    "doc": "Examples in both JavaScript and Python demonstrate the method's behavior with non-zero and zero inputs.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "asin",
    "signature": "asin()",
    "insertText": "asin()",
    "doc": "The domain of arcsine is [-1, 1], and inputs outside this range are invalid.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "atan",
    "signature": "atan()",
    "insertText": "atan()",
    "doc": "Computes the arctangent in radians of the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "atan2",
    "signature": "atan2(right)",
    "insertText": "atan2(${1:right})",
    "doc": "The examples show how to use atan2 in JavaScript and Python to find angles for different points.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "bitCount",
    "signature": "bitCount()",
    "insertText": "bitCount()",
    "doc": "Examples demonstrate its use with positive, negative, and hexadecimal values in JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "bitwiseAnd",
    "signature": "bitwiseAnd(right)",
    "insertText": "bitwiseAnd(${1:right})",
    "doc": "Examples show how to use the bitwiseAnd method in both JavaScript and Python, demonstrating the bitwise AND calculation with unsigned 8-bit binary numbers.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "bitwiseNot",
    "signature": "bitwiseNot()",
    "insertText": "bitwiseNot()",
    "doc": "An example demonstrates how the bitwise NOT of 25 (00011001) results in -26 (11100110) when interpreted as a signed 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "bitwiseOr",
    "signature": "bitwiseOr(right)",
    "insertText": "bitwiseOr(${1:right})",
    "doc": "Both the left-hand and right-hand values must be of type Number .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "bitwiseXor",
    "signature": "bitwiseXor(right)",
    "insertText": "bitwiseXor(${1:right})",
    "doc": "Examples are provided in both JavaScript and Python, illustrating how to use the method with 8-bit binary representation and showing the expected output.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "byte",
    "signature": "byte()",
    "insertText": "byte()",
    "doc": "Numbers outside the byte range of 0 to 255 when cast to byte become either the maximum value (255) or the minimum value (0) of the byte range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "cbrt",
    "signature": "cbrt()",
    "insertText": "cbrt()",
    "doc": "Can be used in JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "ceil",
    "signature": "ceil()",
    "insertText": "ceil()",
    "doc": "Examples demonstrate the function's use with both positive and negative numbers in JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "clamp",
    "signature": "clamp(min, max)",
    "insertText": "clamp(${1:min}, ${2:max})",
    "doc": "Numbers less than the minimum are set to the minimum value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "cos",
    "signature": "cos()",
    "insertText": "cos()",
    "doc": "Examples demonstrate calculating the cosine of various angles in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "cosh",
    "signature": "cosh()",
    "insertText": "cosh()",
    "doc": "Examples are provided for using cosh() in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "digamma",
    "signature": "digamma()",
    "insertText": "digamma()",
    "doc": "The digamma function returns negative infinity for inputs of -1 and 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "divide",
    "signature": "divide(right)",
    "insertText": "divide(${1:right})",
    "doc": "Divides the first value by the second, returning 0 for division by 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "double",
    "signature": "double()",
    "insertText": "double()",
    "doc": "Examples are provided in both JavaScript and Python for casting a number to a double.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "eq",
    "signature": "eq(right)",
    "insertText": "eq(${1:right})",
    "doc": "Examples demonstrate its use in JavaScript and Python, returning 1 for equal numbers and 0 for unequal numbers.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "erf",
    "signature": "erf()",
    "insertText": "erf()",
    "doc": "Examples show how to use the erf() method in both JavaScript and Python with various input values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "erfc",
    "signature": "erfc()",
    "insertText": "erfc()",
    "doc": "Examples demonstrate calculating the complementary error function for various positive and negative inputs using JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "erfcInv",
    "signature": "erfcInv()",
    "insertText": "erfcInv()",
    "doc": "Examples demonstrate how to use erfcInv() in both JavaScript and Python, showing the output for inputs 0, 0.001, and 1.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "erfInv",
    "signature": "erfInv()",
    "insertText": "erfInv()",
    "doc": "Examples demonstrate calculating the inverse error function for values like -1, -0.001, 0, 0.001, and 1, yielding results such as -Infinity, -0.000886227, 0, 0.000886227, and Infinity respectively.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "The Earth Engine Python client library does not have an evaluate method for asynchronous evaluation of ee.Number objects; getInfo() should be used instead.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "exp",
    "signature": "exp()",
    "insertText": "exp()",
    "doc": "Examples demonstrate the method's use with negative, zero, and positive input values in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "expression",
    "signature": "expression(expression, vars)",
    "insertText": "expression(${1:expression}, ${2:vars})",
    "doc": "The vars argument allows you to provide named values that can be referenced within the expression string.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "first",
    "signature": "first(right)",
    "insertText": "first(${1:right})",
    "doc": "Examples demonstrate that applying first to two numbers returns the first number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "firstNonZero",
    "signature": "firstNonZero(right)",
    "insertText": "firstNonZero(${1:right})",
    "doc": "Selects the first value if it is non-zero, and the second value otherwise.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "float",
    "signature": "float()",
    "insertText": "float()",
    "doc": "The examples demonstrate using float() on an ee.Number in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "floor",
    "signature": "floor()",
    "insertText": "floor()",
    "doc": "Computes the largest integer less than or equal to the input.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "format",
    "signature": "format(pattern)",
    "insertText": "format(${1:pattern})",
    "doc": "Examples demonstrate formatting numbers with zero-filling, specific decimal places, and scientific notation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "gamma",
    "signature": "gamma()",
    "insertText": "gamma()",
    "doc": "Inputs less than or equal to 0 are invalid.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "gammainc",
    "signature": "gammainc(right)",
    "insertText": "gammainc(${1:right})",
    "doc": "Calculates the regularized lower incomplete Gamma function ��(x,a).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "gt",
    "signature": "gt(right)",
    "insertText": "gt(${1:right})",
    "doc": "Examples demonstrate its usage in both JavaScript and Python, showing results for cases where the first value is both less than and greater than the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "gte",
    "signature": "gte(right)",
    "insertText": "gte(${1:right})",
    "doc": "Returns 1 if and only if the first value is greater than or equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "hypot",
    "signature": "hypot(right)",
    "insertText": "hypot(${1:right})",
    "doc": "Examples demonstrate calculating the length from the origin to a point (x,y) using hypot .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "int",
    "signature": "int()",
    "insertText": "int()",
    "doc": "Numbers outside the 32-bit integer range are cast to the maximum or minimum value within the range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "int16",
    "signature": "int16()",
    "insertText": "int16()",
    "doc": "Casting a number outside the int16 range will result in the output being the maximum or minimum value of the int16 range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "int32",
    "signature": "int32()",
    "insertText": "int32()",
    "doc": "Numbers outside the int32 range will be clamped to the minimum or maximum value of the int32 range when cast.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "int64",
    "signature": "int64()",
    "insertText": "int64()",
    "doc": "Casts the input value to a signed 64-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "int8",
    "signature": "int8()",
    "insertText": "int8()",
    "doc": "Numbers outside the int8 range [-128, 127] will be clamped to the nearest boundary value when cast to int8.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "lanczos",
    "signature": "lanczos()",
    "insertText": "lanczos()",
    "doc": "Examples demonstrate the output for various input values in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "leftShift",
    "signature": "leftShift(right)",
    "insertText": "leftShift(${1:right})",
    "doc": "The method returns a number representing the result of the left shift operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "log",
    "signature": "log()",
    "insertText": "log()",
    "doc": "Example usage in JavaScript and Python demonstrates how the natural logarithm is calculated for different input values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "log10",
    "signature": "log10()",
    "insertText": "log10()",
    "doc": "The method takes a single argument, which is the input number for the logarithm calculation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "long",
    "signature": "long()",
    "insertText": "long()",
    "doc": "Using long() on a floating-point number will result in the loss of decimal precision.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "lt",
    "signature": "lt(right)",
    "insertText": "lt(${1:right})",
    "doc": "Returns 1 if and only if the first value is less than the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "lte",
    "signature": "lte(right)",
    "insertText": "lte(${1:right})",
    "doc": "Returns 1 if and only if the first value is less than or equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "max",
    "signature": "max(right)",
    "insertText": "max(${1:right})",
    "doc": "Number.max(right) selects the maximum of the first ( left ) and second ( right ) Number values and returns a Number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "min",
    "signature": "min(right)",
    "insertText": "min(${1:right})",
    "doc": "Examples demonstrate the usage in JavaScript and Python, showing that Number.min(5, 10) results in 5.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "mod",
    "signature": "mod(right)",
    "insertText": "mod(${1:right})",
    "doc": "Examples are provided demonstrating the use of the mod method in both JavaScript and Python for both positive and negative dividends.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "multiply",
    "signature": "multiply(right)",
    "insertText": "multiply(${1:right})",
    "doc": "Examples demonstrate multiplying positive and negative integers and decimals, and multiplying by zero.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "neq",
    "signature": "neq(right)",
    "insertText": "neq(${1:right})",
    "doc": "Returns 1 if and only if the first value is not equal to the second.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "not",
    "signature": "not()",
    "insertText": "not()",
    "doc": "The usage of Number.not() is demonstrated in both JavaScript and Python examples.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "or",
    "signature": "or(right)",
    "insertText": "or(${1:right})",
    "doc": "Examples show the method returning 1 when one or both inputs are non-zero, and 0 when both inputs are zero.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "parse",
    "signature": "parse(input, radix)",
    "insertText": "parse(${1:input}, ${2:radix})",
    "doc": "Leading zeros are removed during the conversion process.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "pow",
    "signature": "pow(right)",
    "insertText": "pow(${1:right})",
    "doc": "The result of the Number.pow(right) method is a Number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "rightShift",
    "signature": "rightShift(right)",
    "insertText": "rightShift(${1:right})",
    "doc": "The method returns a Number, representing the result of the signed right shift operation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "round",
    "signature": "round()",
    "insertText": "round()",
    "doc": "The method takes a number as input and returns a number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided for both JavaScript and Python environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "short",
    "signature": "short()",
    "insertText": "short()",
    "doc": "Numbers exceeding the short integer range will be clamped to the maximum or minimum value of the range when cast to short.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "signum",
    "signature": "signum()",
    "insertText": "signum()",
    "doc": "Computes the signum function (sign) of the input; 0 if the input is 0, 1 if the input is greater than 0, -1 if the input is less than 0.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "sin",
    "signature": "sin()",
    "insertText": "sin()",
    "doc": "It takes a single argument, the input number (angle in radians), and returns a number representing the sine.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "sinh",
    "signature": "sinh()",
    "insertText": "sinh()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating its usage with various input values and how to convert degrees to radians before computation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "sqrt",
    "signature": "sqrt()",
    "insertText": "sqrt()",
    "doc": "Input values less than 0 are invalid for this function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "subtract",
    "signature": "subtract(right)",
    "insertText": "subtract(${1:right})",
    "doc": "It takes two number arguments, left and right , and returns a number.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "tan",
    "signature": "tan()",
    "insertText": "tan()",
    "doc": "Examples show how to compute the tangent of common angles and how to convert degrees to radians for use with the method.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "tanh",
    "signature": "tanh()",
    "insertText": "tanh()",
    "doc": "Examples are provided for both JavaScript and Python to demonstrate usage with various inputs, including converting degrees to radians before calculation.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toByte",
    "signature": "toByte()",
    "insertText": "toByte()",
    "doc": "Floating-point numbers will lose decimal precision when cast to an unsigned 8-bit integer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toDouble",
    "signature": "toDouble()",
    "insertText": "toDouble()",
    "doc": "Examples are provided in both JavaScript and Python demonstrating its usage.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toFloat",
    "signature": "toFloat()",
    "insertText": "toFloat()",
    "doc": "Example usage in JavaScript and Python demonstrates casting a number to a float.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toInt",
    "signature": "toInt()",
    "insertText": "toInt()",
    "doc": "Numbers outside the signed 32-bit integer range are cast to the range's min or max value.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toInt16",
    "signature": "toInt16()",
    "insertText": "toInt16()",
    "doc": "Numbers exceeding the int16 maximum or minimum range when cast to int16 will be truncated to the respective maximum or minimum value of the int16 range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toInt32",
    "signature": "toInt32()",
    "insertText": "toInt32()",
    "doc": "Numbers outside the 32-bit integer range will be clamped to the maximum or minimum value of the int32 range when cast.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toInt64",
    "signature": "toInt64()",
    "insertText": "toInt64()",
    "doc": "Numbers outside the int64 range when cast become the respective int64 range maximum or minimum.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toInt8",
    "signature": "toInt8()",
    "insertText": "toInt8()",
    "doc": "Casting a floating-point number to a signed 8-bit integer will result in the loss of decimal precision.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toLong",
    "signature": "toLong()",
    "insertText": "toLong()",
    "doc": "When casting a floating-point number to a long, decimal precision is lost.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toShort",
    "signature": "toShort()",
    "insertText": "toShort()",
    "doc": "Numbers outside the short range are cast to the closest range limit (max or min).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toUint16",
    "signature": "toUint16()",
    "insertText": "toUint16()",
    "doc": "Numbers outside the uint16 range, when cast, become the closest value within the range (0 or 65535).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toUint32",
    "signature": "toUint32()",
    "insertText": "toUint32()",
    "doc": "Numbers less than the uint32 range minimum become the uint32 range minimum when cast to uint32.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "toUint8",
    "signature": "toUint8()",
    "insertText": "toUint8()",
    "doc": "Numbers outside the uint8 range become the nearest bound of the range (0 for less than min, 255 for greater than max) when cast to uint8.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "trigamma",
    "signature": "trigamma()",
    "insertText": "trigamma()",
    "doc": "Examples demonstrate the trigamma function's output for various input values in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "uint16",
    "signature": "uint16()",
    "insertText": "uint16()",
    "doc": "Numbers outside the uint16 range when cast will be clamped to the minimum (0) or maximum (65535) value of the range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "uint32",
    "signature": "uint32()",
    "insertText": "uint32()",
    "doc": "Numbers outside the uint32 range will be clamped to the minimum or maximum value of the range.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "uint8",
    "signature": "uint8()",
    "insertText": "uint8()",
    "doc": "Numbers outside the uint8 range [0, 255] are cast to the nearest range limit (0 or 255).",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Number",
    "name": "unitScale",
    "signature": "unitScale(min, max)",
    "insertText": "unitScale(${1:min}, ${2:max})",
    "doc": "Scales the input so that the range of input values [min, max] becomes [0, 1]. Values outside the range are NOT clamped. If min == max, 0 is returned.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.PixelType",
    "name": "dimensions",
    "signature": "dimensions()",
    "insertText": "dimensions()",
    "doc": "Returns the number of dimensions for this type. Will be 0 for scalar values and >= 1 for array values.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.PixelType",
    "name": "double",
    "signature": "double()",
    "insertText": "double()",
    "doc": "Returns the 64-bit floating point pixel type.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "float",
    "signature": "float()",
    "insertText": "float()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "int16",
    "signature": "int16()",
    "insertText": "int16()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "int32",
    "signature": "int32()",
    "insertText": "int32()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "int64",
    "signature": "int64()",
    "insertText": "int64()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "int8",
    "signature": "int8()",
    "insertText": "int8()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "maxValue",
    "signature": "maxValue()",
    "insertText": "maxValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.PixelType",
    "name": "minValue",
    "signature": "minValue()",
    "insertText": "minValue()",
    "doc": "Returns the minimum value of the PixelType.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.PixelType",
    "name": "precision",
    "signature": "precision()",
    "insertText": "precision()",
    "doc": "Returns the precision of the PixelType. One of 'int', 'float', or 'double'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.PixelType",
    "name": "uint16",
    "signature": "uint16()",
    "insertText": "uint16()",
    "doc": "Returns the 16-bit unsigned integer pixel type.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "uint32",
    "signature": "uint32()",
    "insertText": "uint32()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.PixelType",
    "name": "uint8",
    "signature": "uint8()",
    "insertText": "uint8()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.PixelType"
  },
  {
    "receiver": "ee.Projection",
    "name": "atScale",
    "signature": "atScale(meters)",
    "insertText": "atScale(${1:meters})",
    "doc": "Returns the projection scaled such that its units have the given scale in linear meters, as measured at the point of true scale.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Projection",
    "name": "crs",
    "signature": "crs()",
    "insertText": "crs()",
    "doc": "Returns the authority code (e.g., 'EPSG:4326') for the base coordinate system of this projection, or null if the base coordinate system is not found in any available database.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Projection",
    "name": "nominalScale",
    "signature": "nominalScale()",
    "insertText": "nominalScale()",
    "doc": "Returns the linear scale in meters of the units of this projection, as measured at the point of true scale.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Projection",
    "name": "scale",
    "signature": "scale(x, y)",
    "insertText": "scale(${1:x}, ${2:y})",
    "doc": "Returns the projection scaled by the given amount in each axis.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Projection",
    "name": "transform",
    "signature": "transform()",
    "insertText": "transform()",
    "doc": "Returns a WKT representation of the transform of this Projection. This is the transform that converts from projected coordinates to the base coordinate system.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Projection",
    "name": "translate",
    "signature": "translate(x, y)",
    "insertText": "translate(${1:x}, ${2:y})",
    "doc": "Returns the projection translated by the given amount in each axis.",
    "kind": "method",
    "returnType": "ee.Projection"
  },
  {
    "receiver": "ee.Projection",
    "name": "wkt",
    "signature": "wkt()",
    "insertText": "wkt()",
    "doc": "Returns a WKT representation of the base coordinate system of this Projection.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Reducer",
    "name": "allNonZero",
    "signature": "allNonZero()",
    "insertText": "allNonZero()",
    "doc": "Returns a Reducer that returns 1 if all of its inputs are non-zero, 0 otherwise. Where applicable, the output name is \"all\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "anyNonZero",
    "signature": "anyNonZero()",
    "insertText": "anyNonZero()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "autoHistogram",
    "signature": "autoHistogram(maxBuckets, minBucketWidth, maxRaw, cumulative)",
    "insertText": "autoHistogram(${1:maxBuckets}, ${2:minBucketWidth}, ${3:maxRaw}, ${4:cumulative})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "bitwiseAnd",
    "signature": "bitwiseAnd()",
    "insertText": "bitwiseAnd()",
    "doc": "Returns a Reducer that computes the bitwise-and summation of its inputs. Where applicable, the output name is \"bitwiseAnd\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "bitwiseOr",
    "signature": "bitwiseOr()",
    "insertText": "bitwiseOr()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "centeredCovariance",
    "signature": "centeredCovariance()",
    "insertText": "centeredCovariance()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "circularMean",
    "signature": "circularMean()",
    "insertText": "circularMean()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "circularStddev",
    "signature": "circularStddev()",
    "insertText": "circularStddev()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "circularVariance",
    "signature": "circularVariance()",
    "insertText": "circularVariance()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "combine",
    "signature": "combine(reducer2, outputPrefix, sharedInputs)",
    "insertText": "combine(${1:reducer2}, ${2:outputPrefix}, ${3:sharedInputs})",
    "doc": "If sharedInputs is true, the reducers must have the same number of inputs, and the combined reducer's will match them; if it is false, the inputs of the combined reducer will be those of reducer1 followed by those of reducer2.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "count",
    "signature": "count()",
    "insertText": "count()",
    "doc": "Returns a Reducer that computes the number of non-null inputs. Where applicable, the output name is \"count\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "countDistinct",
    "signature": "countDistinct()",
    "insertText": "countDistinct()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "countDistinctNonNull",
    "signature": "countDistinctNonNull()",
    "insertText": "countDistinctNonNull()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "countEvery",
    "signature": "countEvery()",
    "insertText": "countEvery()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "countRuns",
    "signature": "countRuns()",
    "insertText": "countRuns()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "covariance",
    "signature": "covariance()",
    "insertText": "covariance()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "disaggregate",
    "signature": "disaggregate(axis)",
    "insertText": "disaggregate(${1:axis})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "first",
    "signature": "first()",
    "insertText": "first()",
    "doc": "Returns a Reducer that returns the first of its inputs. Where applicable, the output name is \"first\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "firstNonNull",
    "signature": "firstNonNull()",
    "insertText": "firstNonNull()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "fixed2DHistogram",
    "signature": "fixed2DHistogram(xMin, xMax, xSteps, yMin, yMax, ySteps)",
    "insertText": "fixed2DHistogram(${1:xMin}, ${2:xMax}, ${3:xSteps}, ${4:yMin}, ${5:yMax}, ${6:ySteps})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "fixedHistogram",
    "signature": "fixedHistogram(min, max, steps, cumulative)",
    "insertText": "fixedHistogram(${1:min}, ${2:max}, ${3:steps}, ${4:cumulative})",
    "doc": "Creates a reducer that will compute a histogram of the inputs using a fixed number of fixed width bins. Values outside of the [min, max) range are ignored. The output is a Nx2 array of bucket lower edges and counts (or cumulative counts) and is suitable for use per-pixel.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "forEach",
    "signature": "forEach(outputNames)",
    "insertText": "forEach(${1:outputNames})",
    "doc": "Creates a Reducer by combining a copy of the given reducer for each output name in the given list. If the reducer has a single output, the output names are used as-is; otherwise they are prefixed to the original output names.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "forEachBand",
    "signature": "forEachBand(image)",
    "insertText": "forEachBand(${1:image})",
    "doc": "Creates a Reducer by combining a copy of the given reducer for each band in the given image using the band names as output names.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "forEachElement",
    "signature": "forEachElement()",
    "insertText": "forEachElement()",
    "doc": "For example, with the 'sum' reducer applied to 5 arrays with shape 2x2, the output will be a 2x2 array, where each position is the sum of the 5 values at that position.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "frequencyHistogram",
    "signature": "frequencyHistogram()",
    "insertText": "frequencyHistogram()",
    "doc": "Returns a Reducer that returns a (weighted) frequency table of its inputs. Where applicable, the output name is \"histogram\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "geometricMedian",
    "signature": "geometricMedian(numX, eta, initialStepSize)",
    "insertText": "geometricMedian(${1:numX}, ${2:eta}, ${3:initialStepSize})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "getOutputs",
    "signature": "getOutputs()",
    "insertText": "getOutputs()",
    "doc": "Returns a list of the output names of the given reducer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Reducer",
    "name": "group",
    "signature": "group(groupField, groupName)",
    "insertText": "group(${1:groupField}, ${2:groupName})",
    "doc": "Groups reducer records by the value of a given input and reduces each group with the given reducer.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "histogram",
    "signature": "histogram(maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "histogram(${1:maxBuckets}, ${2:minBucketWidth}, ${3:maxRaw})",
    "doc": "Create a reducer that will compute a histogram of the inputs.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "intervalMean",
    "signature": "intervalMean(minPercentile, maxPercentile, maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "intervalMean(${1:minPercentile}, ${2:maxPercentile}, ${3:maxBuckets}, ${4:minBucketWidth}, ${5:maxRaw})",
    "doc": "Creates a Reducer to compute the mean of all inputs in the specified percentile range. For small numbers of inputs (up to maxRaw) the mean will be computed directly; for larger numbers of inputs the mean will be derived from a histogram.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "kendallsCorrelation",
    "signature": "kendallsCorrelation(numInputs)",
    "insertText": "kendallsCorrelation(${1:numInputs})",
    "doc": "Creates a reducer that computes the Kendall's Tau-b rank correlation. A positive tau value indicates an increasing trend; negative value indicates a decreasing trend. See https://commons.apache.org/proper/commons-math/javadocs/api-3.6.1/org/apache/commons/math3/stat/correlation/KendallsCorrelation.html for details.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "kurtosis",
    "signature": "kurtosis()",
    "insertText": "kurtosis()",
    "doc": "Returns a Reducer that Computes the kurtosis of its inputs. Where applicable, the output name is \"kurtosis\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "last",
    "signature": "last()",
    "insertText": "last()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "lastNonNull",
    "signature": "lastNonNull()",
    "insertText": "lastNonNull()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "linearFit",
    "signature": "linearFit()",
    "insertText": "linearFit()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "linearRegression",
    "signature": "linearRegression(numX, numY)",
    "insertText": "linearRegression(${1:numX}, ${2:numY})",
    "doc": "The first output is a coefficients array with dimensions (numX, numY); each column contains the coefficients for the corresponding dependent variable. The second output is a vector of the root mean square of the residuals of each dependent variable. Both outputs are null if the system is underdetermined, e.g., the number of inputs is less than or equal to numX.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "max",
    "signature": "max(numInputs)",
    "insertText": "max(${1:numInputs})",
    "doc": "Creates a reducer that outputs the maximum value of its (first) input. If numInputs is greater than one, also outputs the corresponding values of the additional inputs.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "mean",
    "signature": "mean()",
    "insertText": "mean()",
    "doc": "Returns a Reducer that computes the (weighted) arithmetic mean of its inputs. Where applicable, the output name is \"mean\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "median",
    "signature": "median(maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "median(${1:maxBuckets}, ${2:minBucketWidth}, ${3:maxRaw})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "min",
    "signature": "min(numInputs)",
    "insertText": "min(${1:numInputs})",
    "doc": "Creates a reducer that outputs the minimum value of its (first) input. If numInputs is greater than one, also outputs the corresponding values of the additional inputs.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "minMax",
    "signature": "minMax()",
    "insertText": "minMax()",
    "doc": "Returns a Reducer that computes the minimum and maximum of its inputs. Where applicable, the outputs are named: \"min\", \"max\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "mode",
    "signature": "mode(maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "mode(${1:maxBuckets}, ${2:minBucketWidth}, ${3:maxRaw})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "pearsonsCorrelation",
    "signature": "pearsonsCorrelation()",
    "insertText": "pearsonsCorrelation()",
    "doc": "Creates a two-input reducer that computes Pearson's product-moment correlation coefficient and the 2-sided p-value test for correlation = 0.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "percentile",
    "signature": "percentile(percentiles, outputNames, maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "percentile(${1:percentiles}, ${2:outputNames}, ${3:maxBuckets}, ${4:minBucketWidth}, ${5:maxRaw})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "product",
    "signature": "product()",
    "insertText": "product()",
    "doc": "Returns a Reducer that computes the product of its inputs. Where applicable, the output name is \"product\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "repeat",
    "signature": "repeat(count)",
    "insertText": "repeat(${1:count})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "ridgeRegression",
    "signature": "ridgeRegression(numX, numY, lambda)",
    "insertText": "ridgeRegression(${1:numX}, ${2:numY}, ${3:lambda})",
    "doc": "The first output is a coefficients array with dimensions (numX + 1, numY); each column contains the coefficients for the corresponding dependent variable plus the intercept for the dependent variable in the last column. Additional outputs are a vector of the root mean square of the residuals of each dependent variable and a vector of p-values for each dependent variable. Outputs are null if the system is underdetermined, e.g., the number of inputs is less than numX + 1.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "robustLinearRegression",
    "signature": "robustLinearRegression(numX, numY, beta)",
    "insertText": "robustLinearRegression(${1:numX}, ${2:numY}, ${3:beta})",
    "doc": "The first output is a coefficients array with dimensions (numX, numY); each column contains the coefficients for the corresponding dependent variable. The second is a vector of the root mean square of the residuals of each dependent variable. Both outputs are null if the system is underdetermined, e.g., the number of inputs is less than numX.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "sampleStdDev",
    "signature": "sampleStdDev()",
    "insertText": "sampleStdDev()",
    "doc": "Returns a Reducer that computes the sample standard deviation of its inputs. Where applicable, the output name is \"stdDev\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "sampleVariance",
    "signature": "sampleVariance()",
    "insertText": "sampleVariance()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "sensSlope",
    "signature": "sensSlope()",
    "insertText": "sensSlope()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "setOutputs",
    "signature": "setOutputs(outputs)",
    "insertText": "setOutputs(${1:outputs})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "skew",
    "signature": "skew()",
    "insertText": "skew()",
    "doc": "Returns a Reducer that Computes the skewness of its inputs. Where applicable, the output name is \"skew\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "spearmansCorrelation",
    "signature": "spearmansCorrelation()",
    "insertText": "spearmansCorrelation()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "splitWeights",
    "signature": "splitWeights()",
    "insertText": "splitWeights()",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "stdDev",
    "signature": "stdDev()",
    "insertText": "stdDev()",
    "doc": "Returns a Reducer that computes the standard deviation of its inputs. Where applicable, the output name is \"stdDev\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "sum",
    "signature": "sum()",
    "insertText": "sum()",
    "doc": "No arguments.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "toCollection",
    "signature": "toCollection(propertyNames, numOptional)",
    "insertText": "toCollection(${1:propertyNames}, ${2:numOptional})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "toList",
    "signature": "toList(tupleSize, numOptional)",
    "insertText": "toList(${1:tupleSize}, ${2:numOptional})",
    "doc": "Creates a reducer that collects its inputs into a list, optionally grouped into tuples.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "unweighted",
    "signature": "unweighted()",
    "insertText": "unweighted()",
    "doc": "Returns a Reducer with the same inputs and outputs as the given Reducer, but with no weighted inputs.",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.Reducer",
    "name": "variance",
    "signature": "variance()",
    "insertText": "variance()",
    "doc": "Returns a Reducer that computes the variance of its inputs. Where applicable, the output name is \"variance\".",
    "kind": "method",
    "returnType": "ee.Reducer"
  },
  {
    "receiver": "ee.String",
    "name": "aside",
    "signature": "aside(func, var_args)",
    "insertText": "aside(${1:func}, ${2:var_args})",
    "doc": "Calls a function passing this object as the first argument, and returning itself. Convenient e.g. when debugging:",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "cat",
    "signature": "cat(string2)",
    "insertText": "cat(${1:string2})",
    "doc": "The first string is 'this' and the second string is 'string2'.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "compareTo",
    "signature": "compareTo(string2)",
    "insertText": "compareTo(${1:string2})",
    "doc": "Compares two strings lexicographically. Returns: the value 0 if the two strings are lexicographically equal; -1 if string1 is less than string2; and 1 if string1 is lexicographically greater than string2.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "decodeJSON",
    "signature": "decodeJSON()",
    "insertText": "decodeJSON()",
    "doc": "The method takes a string as input and returns an Object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "encodeJSON",
    "signature": "encodeJSON(object)",
    "insertText": "encodeJSON(${1:object})",
    "doc": "Encodes an object to JSON. Supports primitives, lists, and dictionaries.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "equals",
    "signature": "equals(target)",
    "insertText": "equals(${1:target})",
    "doc": "Checks for string equality with a given object. Returns true if the target is a string and is lexicographically equal to the reference, or false otherwise.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "evaluate",
    "signature": "evaluate(callback)",
    "insertText": "evaluate(${1:callback})",
    "doc": "The Python client library does not have an evaluate method for ee.String objects; ee.String.getInfo() should be used instead.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "getInfo",
    "signature": "getInfo(callback)",
    "insertText": "getInfo(${1:callback})",
    "doc": "Retrieves the value of this object from the server.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "index",
    "signature": "index(pattern)",
    "insertText": "index(${1:pattern})",
    "doc": "Searches a string for the first occurrence of a substring. Returns the index of the first match, or -1.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "length",
    "signature": "length()",
    "insertText": "length()",
    "doc": "It can be used in both JavaScript and Python Earth Engine environments.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "match",
    "signature": "match(regex, flags)",
    "insertText": "match(${1:regex}, ${2:flags})",
    "doc": "The method can be used to find specific patterns within a string, as demonstrated by various examples in JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "replace",
    "signature": "replace(regex, replacement, flags)",
    "insertText": "replace(${1:regex}, ${2:replacement}, ${3:flags})",
    "doc": "The method can be used to replace a specific occurrence or all occurrences of a pattern within a string.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "rindex",
    "signature": "rindex(pattern)",
    "insertText": "rindex(${1:pattern})",
    "doc": "Searches a string for the last occurrence of a substring. Returns the index of the first match, or -1.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "serialize",
    "signature": "serialize(legacy)",
    "insertText": "serialize(${1:legacy})",
    "doc": "Examples are provided for using serialize in JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "slice",
    "signature": "slice(start, end)",
    "insertText": "slice(${1:start}, ${2:end})",
    "doc": "Returns a substring of the given string. If the specified range exceeds the length of the string, returns a shorter substring.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "split",
    "signature": "split(regex, flags)",
    "insertText": "split(${1:regex}, ${2:flags})",
    "doc": "Providing an empty string as the regular expression splits the input string into individual characters.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "toLowerCase",
    "signature": "toLowerCase()",
    "insertText": "toLowerCase()",
    "doc": "Converts all of the characters in a string to lower case.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "toUpperCase",
    "signature": "toUpperCase()",
    "insertText": "toUpperCase()",
    "doc": "Examples demonstrate usage in both JavaScript and Python.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.String",
    "name": "trim",
    "signature": "trim()",
    "insertText": "trim()",
    "doc": "Returns a string whose value is the original string, with any leading and trailing whitespace removed.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ee.Terrain",
    "name": "aspect",
    "signature": "aspect(input)",
    "insertText": "aspect(${1:input})",
    "doc": "The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Terrain",
    "name": "fillMinima",
    "signature": "fillMinima(image, borderValue, neighborhood)",
    "insertText": "fillMinima(${1:image}, ${2:borderValue}, ${3:neighborhood})",
    "doc": "Fills local minima. Only works on INT types.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Terrain",
    "name": "hillshade",
    "signature": "hillshade(input, azimuth, elevation)",
    "insertText": "hillshade(${1:input}, ${2:azimuth}, ${3:elevation})",
    "doc": "Examples in both JavaScript (Code Editor) and Python (Colab) demonstrate its usage.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Terrain",
    "name": "hillShadow",
    "signature": "hillShadow(image, azimuth, zenith, neighborhoodSize, hysteresis)",
    "insertText": "hillShadow(${1:image}, ${2:azimuth}, ${3:zenith}, ${4:neighborhoodSize}, ${5:hysteresis})",
    "doc": "Creates a shadow band, with output 1 where pixels are illumunated and 0 where they are shadowed. Takes as input an elevation band, azimuth and zenith of the light source in degrees, a neighborhood size, and whether or not to apply hysteresis when a shadow appears. Currently, this algorithm only works for Mercator projections, in which light rays are parallel.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Terrain",
    "name": "products",
    "signature": "products(input)",
    "insertText": "products(${1:input})",
    "doc": "Expects an image containing either a single band of elevation, measured in meters, or if there's more than one band, one named 'elevation'. Adds output bands named 'slope' and 'aspect' measured in degrees plus an unsigned byte output band named 'hillshade' for visualization. All other bands and metadata are copied from the input image. The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ee.Terrain",
    "name": "slope",
    "signature": "slope(input)",
    "insertText": "slope(${1:input})",
    "doc": "The local gradient is computed using the 4-connected neighbors of each pixel, so missing values will occur around the edges of an image.",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "Export",
    "name": "classifier",
    "signature": "classifier namespace",
    "insertText": "classifier",
    "doc": "Namespace: Export.classifier",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "Export",
    "name": "image",
    "signature": "image namespace",
    "insertText": "image",
    "doc": "Namespace: Export.image",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "Export",
    "name": "map",
    "signature": "map namespace",
    "insertText": "map",
    "doc": "Namespace: Export.map",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "Export",
    "name": "table",
    "signature": "table namespace",
    "insertText": "table",
    "doc": "Namespace: Export.table",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "Export",
    "name": "video",
    "signature": "video namespace",
    "insertText": "video",
    "doc": "Namespace: Export.video",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "Export.classifier",
    "name": "toAsset",
    "signature": "toAsset(classifier, description, assetId, priority)",
    "insertText": "toAsset(${1:classifier}, ${2:description}, ${3:assetId}, ${4:priority})",
    "doc": "Only supported for ee.Classifier.smileRandomForest, ee.Classifier.smileCart, ee.Classifier.DecisionTree and ee.Classifier.DecisionTreeEnsemble.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.image",
    "name": "toAsset",
    "signature": "toAsset(image, description, assetId, pyramidingPolicy, dimensions, region, scale, crs, crsTransform, maxPixels, shardSize, priority, overwrite)",
    "insertText": "toAsset(${1:image}, ${2:description}, ${3:assetId}, ${4:pyramidingPolicy}, ${5:dimensions}, ${6:region}, ${7:scale}, ${8:crs}, ${9:crsTransform}, ${10:maxPixels}, ${11:shardSize}, ${12:priority}, ${13:overwrite})",
    "doc": "Tasks created by this function can be initiated from the Tasks tab.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.image",
    "name": "toCloudStorage",
    "signature": "toCloudStorage(image, description, bucket, fileNamePrefix, dimensions, region, scale, crs, crsTransform, maxPixels, shardSize, fileDimensions, skipEmptyTiles, fileFormat, formatOptions, priority)",
    "insertText": "toCloudStorage(${1:image}, ${2:description}, ${3:bucket}, ${4:fileNamePrefix}, ${5:dimensions}, ${6:region}, ${7:scale}, ${8:crs}, ${9:crsTransform}, ${10:maxPixels}, ${11:shardSize}, ${12:fileDimensions}, ${13:skipEmptyTiles}, ${14:fileFormat}, ${15:formatOptions}, ${16:priority})",
    "doc": "\"crsTransform\", \"scale\", and \"dimensions\" are mutually exclusive.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.image",
    "name": "toDrive",
    "signature": "toDrive(image, description, folder, fileNamePrefix, dimensions, region, scale, crs, crsTransform, maxPixels, shardSize, fileDimensions, skipEmptyTiles, fileFormat, formatOptions, priority)",
    "insertText": "toDrive(${1:image}, ${2:description}, ${3:folder}, ${4:fileNamePrefix}, ${5:dimensions}, ${6:region}, ${7:scale}, ${8:crs}, ${9:crsTransform}, ${10:maxPixels}, ${11:shardSize}, ${12:fileDimensions}, ${13:skipEmptyTiles}, ${14:fileFormat}, ${15:formatOptions}, ${16:priority})",
    "doc": "The \"crsTransform\", \"scale\", and \"dimensions\" parameters cannot be used together in the same export task.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.map",
    "name": "toCloudStorage",
    "signature": "toCloudStorage(image, description, bucket, fileFormat, path, writePublicTiles, maxZoom, scale, minZoom, region, skipEmptyTiles, mapsApiKey, bucketCorsUris, priority)",
    "insertText": "toCloudStorage(${1:image}, ${2:description}, ${3:bucket}, ${4:fileFormat}, ${5:path}, ${6:writePublicTiles}, ${7:maxZoom}, ${8:scale}, ${9:minZoom}, ${10:region}, ${11:skipEmptyTiles}, ${12:mapsApiKey}, ${13:bucketCorsUris}, ${14:priority})",
    "doc": "The method takes various arguments to customize the export, including the image to export, destination bucket, file format, zoom levels, region, and more.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.table",
    "name": "toAsset",
    "signature": "toAsset(collection, description, assetId, maxVertices, priority, overwrite)",
    "insertText": "toAsset(${1:collection}, ${2:description}, ${3:assetId}, ${4:maxVertices}, ${5:priority}, ${6:overwrite})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.table",
    "name": "toBigQuery",
    "signature": "toBigQuery(collection, description, table, overwrite, append, selectors, maxVertices, priority)",
    "insertText": "toBigQuery(${1:collection}, ${2:description}, ${3:table}, ${4:overwrite}, ${5:append}, ${6:selectors}, ${7:maxVertices}, ${8:priority})",
    "doc": "Note that this feature is in Preview, and the API and behavior may change significantly. For more information, see https://developers.google.com/earth-engine/guides/export_to_bigquery",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.table",
    "name": "toCloudStorage",
    "signature": "toCloudStorage(collection, description, bucket, fileNamePrefix, fileFormat, selectors, maxVertices, priority)",
    "insertText": "toCloudStorage(${1:collection}, ${2:description}, ${3:bucket}, ${4:fileNamePrefix}, ${5:fileFormat}, ${6:selectors}, ${7:maxVertices}, ${8:priority})",
    "doc": "The default file format is \"CSV\", but other formats like \"GeoJSON\", \"KML\", \"KMZ\", \"SHP\", or \"TFRecord\" are also supported.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.table",
    "name": "toDrive",
    "signature": "toDrive(collection, description, folder, fileNamePrefix, fileFormat, selectors, maxVertices, priority)",
    "insertText": "toDrive(${1:collection}, ${2:description}, ${3:folder}, ${4:fileNamePrefix}, ${5:fileFormat}, ${6:selectors}, ${7:maxVertices}, ${8:priority})",
    "doc": "Examples demonstrate how to export a FeatureCollection to Drive using both JavaScript in the Code Editor and Python in Colab.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.table",
    "name": "toFeatureView",
    "signature": "toFeatureView(collection, description, assetId, maxFeaturesPerTile, thinningStrategy, thinningRanking, zOrderRanking, priority)",
    "insertText": "toFeatureView(${1:collection}, ${2:description}, ${3:assetId}, ${4:maxFeaturesPerTile}, ${5:thinningStrategy}, ${6:thinningRanking}, ${7:zOrderRanking}, ${8:priority})",
    "doc": "Optional arguments include description , assetId , maxFeaturesPerTile , thinningStrategy , thinningRanking , zOrderRanking , and priority .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.video",
    "name": "toCloudStorage",
    "signature": "toCloudStorage(collection, description, bucket, fileNamePrefix, framesPerSecond, dimensions, region, scale, crs, crsTransform, maxPixels, maxFrames, priority)",
    "insertText": "toCloudStorage(${1:collection}, ${2:description}, ${3:bucket}, ${4:fileNamePrefix}, ${5:framesPerSecond}, ${6:dimensions}, ${7:region}, ${8:scale}, ${9:crs}, ${10:crsTransform}, ${11:maxPixels}, ${12:maxFrames}, ${13:priority})",
    "doc": "The exported video's dimensions can be specified using either a maximum dimension as a single integer or a \"WIDTHxHEIGHT\" string.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Export.video",
    "name": "toDrive",
    "signature": "toDrive(collection, description, folder, fileNamePrefix, framesPerSecond, dimensions, region, scale, crs, crsTransform, maxPixels, maxFrames, priority)",
    "insertText": "toDrive(${1:collection}, ${2:description}, ${3:folder}, ${4:fileNamePrefix}, ${5:framesPerSecond}, ${6:dimensions}, ${7:region}, ${8:scale}, ${9:crs}, ${10:crsTransform}, ${11:maxPixels}, ${12:maxFrames}, ${13:priority})",
    "doc": "Some arguments like \"crsTransform\", \"scale\", and \"dimensions\" are mutually exclusive.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "add",
    "signature": "add(item)",
    "insertText": "add(${1:item})",
    "doc": "Returns the map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "addLayer",
    "signature": "addLayer(eeObject, visParams, name, shown, opacity)",
    "insertText": "addLayer(${1:eeObject}, ${2:visParams}, ${3:name}, ${4:shown}, ${5:opacity})",
    "doc": "Returns the new map layer.",
    "kind": "method",
    "returnType": "ui.Map.Layer"
  },
  {
    "receiver": "Map",
    "name": "centerObject",
    "signature": "centerObject(object, zoom, onComplete)",
    "insertText": "centerObject(${1:object}, ${2:zoom}, ${3:onComplete})",
    "doc": "Returns this ui.Map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "clear",
    "signature": "clear()",
    "insertText": "clear()",
    "doc": "Returns the map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "drawingTools",
    "signature": "drawingTools()",
    "insertText": "drawingTools()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "Map",
    "name": "getBounds",
    "signature": "getBounds(asGeoJSON)",
    "insertText": "getBounds(${1:asGeoJSON})",
    "doc": "The method returns a GeoJSONGeometry, a list of numbers, or a string depending on the asGeoJSON argument.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "getCenter",
    "signature": "getCenter()",
    "insertText": "getCenter()",
    "doc": "The provided example demonstrates how to obtain the center coordinates of a map using Map.getCenter() in a JavaScript code editor.",
    "kind": "method",
    "returnType": "ee.Geometry.Point"
  },
  {
    "receiver": "Map",
    "name": "getScale",
    "signature": "getScale()",
    "insertText": "getScale()",
    "doc": "An example in the Code Editor (JavaScript) demonstrates how to get the approximate pixel scale of the default map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "getZoom",
    "signature": "getZoom()",
    "insertText": "getZoom()",
    "doc": "An example demonstrates fetching the zoom level of a default map object using defaultMap.getZoom() .",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "insert",
    "signature": "insert(index, widget)",
    "insertText": "insert(${1:index}, ${2:widget})",
    "doc": "Returns this panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "Map",
    "name": "layers",
    "signature": "layers()",
    "insertText": "layers()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onChangeBounds",
    "signature": "onChangeBounds(callback)",
    "insertText": "onChangeBounds(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onChangeCenter",
    "signature": "onChangeCenter(callback)",
    "insertText": "onChangeCenter(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onChangeZoom",
    "signature": "onChangeZoom(callback)",
    "insertText": "onChangeZoom(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onClick",
    "signature": "onClick(callback)",
    "insertText": "onClick(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onIdle",
    "signature": "onIdle(callback)",
    "insertText": "onIdle(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "onTileLoaded",
    "signature": "onTileLoaded(callback)",
    "insertText": "onTileLoaded(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "remove",
    "signature": "remove(item)",
    "insertText": "remove(${1:item})",
    "doc": "Returns the removed item or null if it hadn't been added to the map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "setCenter",
    "signature": "setCenter(lon, lat, zoom)",
    "insertText": "setCenter(${1:lon}, ${2:lat}, ${3:zoom})",
    "doc": "Returns this ui.Map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "setControlVisibility",
    "signature": "setControlVisibility(all, layerList, zoomControl, scaleControl, mapTypeControl, fullscreenControl, drawingToolsControl)",
    "insertText": "setControlVisibility(${1:all}, ${2:layerList}, ${3:zoomControl}, ${4:scaleControl}, ${5:mapTypeControl}, ${6:fullscreenControl}, ${7:drawingToolsControl})",
    "doc": "Returns this ui.Map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "setGestureHandling",
    "signature": "setGestureHandling(option)",
    "insertText": "setGestureHandling(${1:option})",
    "doc": "See https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions.gestureHandling.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "setLocked",
    "signature": "setLocked(locked, minZoom, maxZoom)",
    "insertText": "setLocked(${1:locked}, ${2:minZoom}, ${3:maxZoom})",
    "doc": "- To reset the map to default, set locked to false and nothing else.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "setOptions",
    "signature": "setOptions(mapTypeId, styles, types)",
    "insertText": "setOptions(${1:mapTypeId}, ${2:styles}, ${3:types})",
    "doc": "Returns this ui.Map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "setZoom",
    "signature": "setZoom(zoom)",
    "insertText": "setZoom(${1:zoom})",
    "doc": "Returns this ui.Map.",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "Map",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- cursor, which can be 'crosshair' or 'hand' (default)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "Map",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "Map",
    "name": "widgets",
    "signature": "widgets()",
    "insertText": "widgets()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui",
    "name": "Button",
    "signature": "Button(label, onClick, disabled, style, imageUrl)",
    "insertText": "Button(${1:label}, ${2:onClick}, ${3:disabled}, ${4:style}, ${5:imageUrl})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Button"
  },
  {
    "receiver": "ui",
    "name": "Chart",
    "signature": "Chart(dataTable, chartType, options, view, downloadable)",
    "insertText": "Chart(${1:dataTable}, ${2:chartType}, ${3:options}, ${4:view}, ${5:downloadable})",
    "doc": "The downloadable argument determines if the chart can be downloaded as CSV, SVG, and PNG and defaults to true.",
    "kind": "constructor",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui",
    "name": "Checkbox",
    "signature": "Checkbox(label, value, onChange, disabled, style)",
    "insertText": "Checkbox(${1:label}, ${2:value}, ${3:onChange}, ${4:disabled}, ${5:style})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Checkbox"
  },
  {
    "receiver": "ui",
    "name": "data",
    "signature": "data namespace",
    "insertText": "data",
    "doc": "Namespace: ui.data",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui",
    "name": "DateSlider",
    "signature": "DateSlider(start, end, value, period, onChange, disabled, style)",
    "insertText": "DateSlider(${1:start}, ${2:end}, ${3:value}, ${4:period}, ${5:onChange}, ${6:disabled}, ${7:style})",
    "doc": "The appearance and functionality of the DateSlider can be further customized through disabled and style arguments.",
    "kind": "constructor",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui",
    "name": "Label",
    "signature": "Label(value, style, targetUrl, imageUrl)",
    "insertText": "Label(${1:value}, ${2:style}, ${3:targetUrl}, ${4:imageUrl})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Label"
  },
  {
    "receiver": "ui",
    "name": "Map",
    "signature": "Map(center, onClick, style)",
    "insertText": "Map(${1:center}, ${2:onClick}, ${3:style})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Map"
  },
  {
    "receiver": "ui",
    "name": "Panel",
    "signature": "Panel(widgets, layout, style)",
    "insertText": "Panel(${1:widgets}, ${2:layout}, ${3:style})",
    "doc": "Panels can be added to ui.root but not printed to the console with print().",
    "kind": "constructor",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui",
    "name": "root",
    "signature": "root namespace",
    "insertText": "root",
    "doc": "Namespace: ui.root",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui",
    "name": "Select",
    "signature": "Select(items, placeholder, value, onChange, disabled, style)",
    "insertText": "Select(${1:items}, ${2:placeholder}, ${3:value}, ${4:onChange}, ${5:disabled}, ${6:style})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Select"
  },
  {
    "receiver": "ui",
    "name": "Slider",
    "signature": "Slider(min, max, value, step, onChange, direction, disabled, style)",
    "insertText": "Slider(${1:min}, ${2:max}, ${3:value}, ${4:step}, ${5:onChange}, ${6:direction}, ${7:disabled}, ${8:style})",
    "doc": "Custom CSS styles can be applied to the slider widget using the style argument.",
    "kind": "constructor",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui",
    "name": "SplitPanel",
    "signature": "SplitPanel(firstPanel, secondPanel, orientation, wipe, style)",
    "insertText": "SplitPanel(${1:firstPanel}, ${2:secondPanel}, ${3:orientation}, ${4:wipe}, ${5:style})",
    "doc": "Note that the given size for the second panel will be ignored if the first panel size is specified, since the overall width of the split panel is controlled independently. Max/min sizes may be set for both panels.",
    "kind": "constructor",
    "returnType": "ui.SplitPanel"
  },
  {
    "receiver": "ui",
    "name": "Textbox",
    "signature": "Textbox(placeholder, value, onChange, disabled, style)",
    "insertText": "Textbox(${1:placeholder}, ${2:value}, ${3:onChange}, ${4:disabled}, ${5:style})",
    "doc": "",
    "kind": "constructor",
    "returnType": "ui.Textbox"
  },
  {
    "receiver": "ui",
    "name": "Thumbnail",
    "signature": "Thumbnail(image, params, onClick, style)",
    "insertText": "Thumbnail(${1:image}, ${2:params}, ${3:onClick}, ${4:style})",
    "doc": "The onClick argument is a callback function executed when the thumbnail is clicked, and style allows applying CSS styles to the thumbnail.",
    "kind": "constructor",
    "returnType": "ui.Thumbnail"
  },
  {
    "receiver": "ui",
    "name": "url",
    "signature": "url namespace",
    "insertText": "url",
    "doc": "Namespace: ui.url",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui",
    "name": "util",
    "signature": "util namespace",
    "insertText": "util",
    "doc": "Namespace: ui.util",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Button",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Button",
    "name": "getImageUrl",
    "signature": "getImageUrl()",
    "insertText": "getImageUrl()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Button",
    "name": "getLabel",
    "signature": "getLabel()",
    "insertText": "getLabel()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Button",
    "name": "onClick",
    "signature": "onClick(callback)",
    "insertText": "onClick(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Button",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this button.",
    "kind": "method",
    "returnType": "ui.Button"
  },
  {
    "receiver": "ui.Button",
    "name": "setImageUrl",
    "signature": "setImageUrl(imageUrl)",
    "insertText": "setImageUrl(${1:imageUrl})",
    "doc": "Returns this button.",
    "kind": "method",
    "returnType": "ui.Button"
  },
  {
    "receiver": "ui.Button",
    "name": "setLabel",
    "signature": "setLabel(label)",
    "insertText": "setLabel(${1:label})",
    "doc": "Returns this button.",
    "kind": "method",
    "returnType": "ui.Button"
  },
  {
    "receiver": "ui.Button",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Button",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "array",
    "signature": "array namespace",
    "insertText": "array",
    "doc": "Namespace: ui.Chart.array",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "feature",
    "signature": "feature namespace",
    "insertText": "feature",
    "doc": "Namespace: ui.Chart.feature",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "getChartType",
    "signature": "getChartType()",
    "insertText": "getChartType()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "getDataTable",
    "signature": "getDataTable()",
    "insertText": "getDataTable()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "getDownloadable",
    "signature": "getDownloadable()",
    "insertText": "getDownloadable()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "getOptions",
    "signature": "getOptions()",
    "insertText": "getOptions()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "getView",
    "signature": "getView()",
    "insertText": "getView()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "image",
    "signature": "image namespace",
    "insertText": "image",
    "doc": "Namespace: ui.Chart.image",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "onClick",
    "signature": "onClick(callback)",
    "insertText": "onClick(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart",
    "name": "setChartType",
    "signature": "setChartType(chartType)",
    "insertText": "setChartType(${1:chartType})",
    "doc": "Returns this chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "setDataTable",
    "signature": "setDataTable(dataTable)",
    "insertText": "setDataTable(${1:dataTable})",
    "doc": "Returns this chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "setDownloadable",
    "signature": "setDownloadable(Whether)",
    "insertText": "setDownloadable(${1:Whether})",
    "doc": "Returns this chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "setOptions",
    "signature": "setOptions(options)",
    "insertText": "setOptions(${1:options})",
    "doc": "Returns this chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "setSeriesNames",
    "signature": "setSeriesNames(seriesNames, seriesIndex)",
    "insertText": "setSeriesNames(${1:seriesNames}, ${2:seriesIndex})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "setView",
    "signature": "setView(view)",
    "insertText": "setView(${1:view})",
    "doc": "Returns this chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Chart",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Chart.array",
    "name": "values",
    "signature": "values(array, axis, xLabels)",
    "insertText": "values(${1:array}, ${2:axis}, ${3:xLabels})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.feature",
    "name": "byFeature",
    "signature": "byFeature(features, xProperty, yProperties)",
    "insertText": "byFeature(${1:features}, ${2:xProperty}, ${3:yProperties})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.feature",
    "name": "byProperty",
    "signature": "byProperty(features, xProperties, seriesProperty)",
    "insertText": "byProperty(${1:features}, ${2:xProperties}, ${3:seriesProperty})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.feature",
    "name": "groups",
    "signature": "groups(features, xProperty, yProperty, seriesProperty)",
    "insertText": "groups(${1:features}, ${2:xProperty}, ${3:yProperty}, ${4:seriesProperty})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.feature",
    "name": "histogram",
    "signature": "histogram(features, property, maxBuckets, minBucketWidth, maxRaw)",
    "insertText": "histogram(${1:features}, ${2:property}, ${3:maxBuckets}, ${4:minBucketWidth}, ${5:maxRaw})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "byClass",
    "signature": "byClass(image, classBand, region, reducer, scale, classLabels, xLabels)",
    "insertText": "byClass(${1:image}, ${2:classBand}, ${3:region}, ${4:reducer}, ${5:scale}, ${6:classLabels}, ${7:xLabels})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "byRegion",
    "signature": "byRegion(image, regions, reducer, scale, xProperty)",
    "insertText": "byRegion(${1:image}, ${2:regions}, ${3:reducer}, ${4:scale}, ${5:xProperty})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "doySeries",
    "signature": "doySeries(imageCollection, region, regionReducer, scale, yearReducer, startDay, endDay)",
    "insertText": "doySeries(${1:imageCollection}, ${2:region}, ${3:regionReducer}, ${4:scale}, ${5:yearReducer}, ${6:startDay}, ${7:endDay})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "doySeriesByRegion",
    "signature": "doySeriesByRegion(imageCollection, bandName, regions, regionReducer, scale, yearReducer, seriesProperty, startDay, endDay)",
    "insertText": "doySeriesByRegion(${1:imageCollection}, ${2:bandName}, ${3:regions}, ${4:regionReducer}, ${5:scale}, ${6:yearReducer}, ${7:seriesProperty}, ${8:startDay}, ${9:endDay})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "doySeriesByYear",
    "signature": "doySeriesByYear(imageCollection, bandName, region, regionReducer, scale, sameDayReducer, startDay, endDay)",
    "insertText": "doySeriesByYear(${1:imageCollection}, ${2:bandName}, ${3:region}, ${4:regionReducer}, ${5:scale}, ${6:sameDayReducer}, ${7:startDay}, ${8:endDay})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "histogram",
    "signature": "histogram(image, region, scale, maxBuckets, minBucketWidth, maxRaw, maxPixels)",
    "insertText": "histogram(${1:image}, ${2:region}, ${3:scale}, ${4:maxBuckets}, ${5:minBucketWidth}, ${6:maxRaw}, ${7:maxPixels})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "regions",
    "signature": "regions(image, regions, reducer, scale, seriesProperty, xLabels)",
    "insertText": "regions(${1:image}, ${2:regions}, ${3:reducer}, ${4:scale}, ${5:seriesProperty}, ${6:xLabels})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "series",
    "signature": "series(imageCollection, region, reducer, scale, xProperty)",
    "insertText": "series(${1:imageCollection}, ${2:region}, ${3:reducer}, ${4:scale}, ${5:xProperty})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Chart.image",
    "name": "seriesByRegion",
    "signature": "seriesByRegion(imageCollection, regions, reducer, band, scale, xProperty, seriesProperty)",
    "insertText": "seriesByRegion(${1:imageCollection}, ${2:regions}, ${3:reducer}, ${4:band}, ${5:scale}, ${6:xProperty}, ${7:seriesProperty})",
    "doc": "Returns a chart.",
    "kind": "method",
    "returnType": "ui.Chart"
  },
  {
    "receiver": "ui.Checkbox",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Checkbox",
    "name": "getLabel",
    "signature": "getLabel()",
    "insertText": "getLabel()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Checkbox",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Checkbox",
    "name": "onChange",
    "signature": "onChange(callback)",
    "insertText": "onChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Checkbox",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this checkbox.",
    "kind": "method",
    "returnType": "ui.Checkbox"
  },
  {
    "receiver": "ui.Checkbox",
    "name": "setLabel",
    "signature": "setLabel(value)",
    "insertText": "setLabel(${1:value})",
    "doc": "Returns this checkbox.",
    "kind": "method",
    "returnType": "ui.Checkbox"
  },
  {
    "receiver": "ui.Checkbox",
    "name": "setValue",
    "signature": "setValue(value, trigger)",
    "insertText": "setValue(${1:value}, ${2:trigger})",
    "doc": "Returns this checkbox.",
    "kind": "method",
    "returnType": "ui.Checkbox"
  },
  {
    "receiver": "ui.Checkbox",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Checkbox",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data",
    "name": "ActiveDictionary",
    "signature": "ActiveDictionary(object, allowedProperties)",
    "insertText": "ActiveDictionary(${1:object}, ${2:allowedProperties})",
    "doc": "When a property of a ui.data.ActiveDictionary (e.g. myButton.style()) is updated, the component it belongs to is automatically updated. For example, myButton.style().set('color', 'red') would change the color of button's text to red.",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.data",
    "name": "ActiveList",
    "signature": "ActiveList(list)",
    "insertText": "ActiveList(${1:list})",
    "doc": "When a ui.data.ActiveList (e.g. Map.layers()) is updated, the component it belongs to is updated as well. For example, Map.layers().add(myLayer) will add myLayer as a layer on the map.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.data.ActiveDictionary",
    "name": "get",
    "signature": "get(key)",
    "insertText": "get(${1:key})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveDictionary",
    "name": "set",
    "signature": "set(keyOrDict, value)",
    "insertText": "set(${1:keyOrDict}, ${2:value})",
    "doc": "Returns this ui.data.ActiveDictionary.",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "add",
    "signature": "add(el)",
    "insertText": "add(${1:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "forEach",
    "signature": "forEach(callback)",
    "insertText": "forEach(${1:callback})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "get",
    "signature": "get(index)",
    "insertText": "get(${1:index})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "getJsArray",
    "signature": "getJsArray()",
    "insertText": "getJsArray()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "insert",
    "signature": "insert(index, el)",
    "insertText": "insert(${1:index}, ${2:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "length",
    "signature": "length()",
    "insertText": "length()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "remove",
    "signature": "remove(el)",
    "insertText": "remove(${1:el})",
    "doc": "Returns the removed element or null if the element was not present in the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "reset",
    "signature": "reset(list)",
    "insertText": "reset(${1:list})",
    "doc": "Returns the elements in the list after the reset is applied.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.data.ActiveList",
    "name": "set",
    "signature": "set(index, el)",
    "insertText": "set(${1:index}, ${2:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "getEnd",
    "signature": "getEnd()",
    "insertText": "getEnd()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "getPeriod",
    "signature": "getPeriod()",
    "insertText": "getPeriod()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "getStart",
    "signature": "getStart()",
    "insertText": "getStart()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "onChange",
    "signature": "onChange(callback)",
    "insertText": "onChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.DateSlider",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "setEnd",
    "signature": "setEnd(value)",
    "insertText": "setEnd(${1:value})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "setPeriod",
    "signature": "setPeriod(value)",
    "insertText": "setPeriod(${1:value})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "setStart",
    "signature": "setStart(start)",
    "insertText": "setStart(${1:start})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "setValue",
    "signature": "setValue(value, trigger)",
    "insertText": "setValue(${1:value}, ${2:trigger})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.DateSlider"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.DateSlider",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Label",
    "name": "getImageUrl",
    "signature": "getImageUrl()",
    "insertText": "getImageUrl()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Label",
    "name": "getUrl",
    "signature": "getUrl()",
    "insertText": "getUrl()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Label",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Label",
    "name": "setImageUrl",
    "signature": "setImageUrl(imageUrl)",
    "insertText": "setImageUrl(${1:imageUrl})",
    "doc": "Returns this label.",
    "kind": "method",
    "returnType": "ui.Label"
  },
  {
    "receiver": "ui.Label",
    "name": "setUrl",
    "signature": "setUrl(targetUrl)",
    "insertText": "setUrl(${1:targetUrl})",
    "doc": "Returns this label.",
    "kind": "method",
    "returnType": "ui.Label"
  },
  {
    "receiver": "ui.Label",
    "name": "setValue",
    "signature": "setValue(value)",
    "insertText": "setValue(${1:value})",
    "doc": "Returns this label.",
    "kind": "method",
    "returnType": "ui.Label"
  },
  {
    "receiver": "ui.Label",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Map",
    "name": "add",
    "signature": "add(widget)",
    "insertText": "add(${1:widget})",
    "doc": "Add widget onto map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "addLayer",
    "signature": "addLayer(eeObject, visParams, name, shown, opacity)",
    "insertText": "addLayer(${1:eeObject}, ${2:visParams}, ${3:name}, ${4:true}, ${5:1})",
    "doc": "Add layer to a UI map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "centerObject",
    "signature": "centerObject(object, zoom)",
    "insertText": "centerObject(${1:object}, ${2:10})",
    "doc": "Center UI map on an object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "CloudStorageLayer",
    "signature": "CloudStorageLayer(bucket, path, maxZoom, suffix, name, shown, opacity)",
    "insertText": "CloudStorageLayer(${1:bucket}, ${2:path}, ${3:maxZoom}, ${4:suffix}, ${5:name}, ${6:shown}, ${7:opacity})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.CloudStorageLayer"
  },
  {
    "receiver": "ui.Map",
    "name": "drawingTools",
    "signature": "drawingTools()",
    "insertText": "drawingTools()",
    "doc": "Access drawing tools.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "DrawingTools",
    "signature": "DrawingTools namespace",
    "insertText": "DrawingTools",
    "doc": "Namespace: ui.Map.DrawingTools",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "FeatureViewLayer",
    "signature": "FeatureViewLayer(assetId, visParams, name, shown, opacity)",
    "insertText": "FeatureViewLayer(${1:assetId}, ${2:visParams}, ${3:name}, ${4:shown}, ${5:opacity})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.FeatureViewLayer"
  },
  {
    "receiver": "ui.Map",
    "name": "GeometryLayer",
    "signature": "GeometryLayer(geometries, name, color, shown, locked)",
    "insertText": "GeometryLayer(${1:geometries}, ${2:name}, ${3:color}, ${4:shown}, ${5:locked})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map",
    "name": "Layer",
    "signature": "Layer(eeObject, visParams, name, shown, opacity)",
    "insertText": "Layer(${1:eeObject}, ${2:visParams}, ${3:name}, ${4:shown}, ${5:opacity})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.Layer"
  },
  {
    "receiver": "ui.Map",
    "name": "layers",
    "signature": "layers()",
    "insertText": "layers()",
    "doc": "Get map layer list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "Linker",
    "signature": "Linker(maps, event)",
    "insertText": "Linker(${1:maps}, ${2:event})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.Linker"
  },
  {
    "receiver": "ui.Map",
    "name": "onClick",
    "signature": "onClick(callback)",
    "insertText": "onClick(${1:function(coords) {\n  $0\n}})",
    "doc": "Register click callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "remove",
    "signature": "remove(widget)",
    "insertText": "remove(${1:widget})",
    "doc": "Remove widget from map.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "setCenter",
    "signature": "setCenter(lon, lat, zoom)",
    "insertText": "setCenter(${1:lon}, ${2:lat}, ${3:10})",
    "doc": "Set UI map center.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "setControlVisibility",
    "signature": "setControlVisibility(controls)",
    "insertText": "setControlVisibility(${1:controls})",
    "doc": "Set control visibility.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "setLocked",
    "signature": "setLocked(locked)",
    "insertText": "setLocked(${1:true})",
    "doc": "Lock or unlock map interactions.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "setOptions",
    "signature": "setOptions(mapTypeId, styles, types)",
    "insertText": "setOptions(${1:mapTypeId}, ${2:styles}, ${3:types})",
    "doc": "Set map style options.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "Get map style object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getBucket",
    "signature": "getBucket()",
    "insertText": "getBucket()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getMaxZoom",
    "signature": "getMaxZoom()",
    "insertText": "getMaxZoom()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getName",
    "signature": "getName()",
    "insertText": "getName()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getOpacity",
    "signature": "getOpacity()",
    "insertText": "getOpacity()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getPath",
    "signature": "getPath()",
    "insertText": "getPath()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getShown",
    "signature": "getShown()",
    "insertText": "getShown()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "getSuffix",
    "signature": "getSuffix()",
    "insertText": "getSuffix()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setBucket",
    "signature": "setBucket(bucket)",
    "insertText": "setBucket(${1:bucket})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.CloudStorageLayer"
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setMaxZoom",
    "signature": "setMaxZoom(maxZoom)",
    "insertText": "setMaxZoom(${1:maxZoom})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.CloudStorageLayer"
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setName",
    "signature": "setName(name)",
    "insertText": "setName(${1:name})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setOpacity",
    "signature": "setOpacity(opacity)",
    "insertText": "setOpacity(${1:opacity})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setPath",
    "signature": "setPath(path)",
    "insertText": "setPath(${1:path})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.CloudStorageLayer"
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setShown",
    "signature": "setShown(shown)",
    "insertText": "setShown(${1:shown})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.CloudStorageLayer",
    "name": "setSuffix",
    "signature": "setSuffix(suffix)",
    "insertText": "setSuffix(${1:suffix})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.CloudStorageLayer"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "addLayer",
    "signature": "addLayer(geometries, name, color, shown, locked)",
    "insertText": "addLayer(${1:geometries}, ${2:name}, ${3:color}, ${4:shown}, ${5:locked})",
    "doc": "Returns the new geometry layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "clear",
    "signature": "clear()",
    "insertText": "clear()",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "draw",
    "signature": "draw()",
    "insertText": "draw()",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "edit",
    "signature": "edit()",
    "insertText": "edit()",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "get",
    "signature": "get(key)",
    "insertText": "get(${1:key})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getDrawModes",
    "signature": "getDrawModes()",
    "insertText": "getDrawModes()",
    "doc": "Returns the list of enabled draw modes.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getLinked",
    "signature": "getLinked()",
    "insertText": "getLinked()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getMap",
    "signature": "getMap()",
    "insertText": "getMap()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getSelected",
    "signature": "getSelected()",
    "insertText": "getSelected()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getShape",
    "signature": "getShape()",
    "insertText": "getShape()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "getShown",
    "signature": "getShown()",
    "insertText": "getShown()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "layers",
    "signature": "layers()",
    "insertText": "layers()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onDraw",
    "signature": "onDraw(callback)",
    "insertText": "onDraw(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onEdit",
    "signature": "onEdit(callback)",
    "insertText": "onEdit(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onErase",
    "signature": "onErase(callback)",
    "insertText": "onErase(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onLayerAdd",
    "signature": "onLayerAdd(callback)",
    "insertText": "onLayerAdd(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onLayerConfig",
    "signature": "onLayerConfig(callback)",
    "insertText": "onLayerConfig(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onLayerRemove",
    "signature": "onLayerRemove(callback)",
    "insertText": "onLayerRemove(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onLayerSelect",
    "signature": "onLayerSelect(callback)",
    "insertText": "onLayerSelect(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onSelect",
    "signature": "onSelect(callback)",
    "insertText": "onSelect(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "onShapeChange",
    "signature": "onShapeChange(callback)",
    "insertText": "onShapeChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "set",
    "signature": "set(keyOrDict, value)",
    "insertText": "set(${1:keyOrDict}, ${2:value})",
    "doc": "Returns this ui.data.ActiveDictionary.",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "setDrawModes",
    "signature": "setDrawModes(drawModes)",
    "insertText": "setDrawModes(${1:drawModes})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "setLinked",
    "signature": "setLinked(linked)",
    "insertText": "setLinked(${1:linked})",
    "doc": "Returns these ui.Map.DrawingTools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "setSelected",
    "signature": "setSelected(layer)",
    "insertText": "setSelected(${1:layer})",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "setShape",
    "signature": "setShape(shape)",
    "insertText": "setShape(${1:shape})",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "setShown",
    "signature": "setShown(shown)",
    "insertText": "setShown(${1:shown})",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "stop",
    "signature": "stop()",
    "insertText": "stop()",
    "doc": "Returns this set of drawing tools.",
    "kind": "method",
    "returnType": "ui.Map.DrawingTools"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "toFeatureCollection",
    "signature": "toFeatureCollection(indexProperty)",
    "insertText": "toFeatureCollection(${1:indexProperty})",
    "doc": "",
    "kind": "method",
    "returnType": "ee.FeatureCollection"
  },
  {
    "receiver": "ui.Map.DrawingTools",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "getAssetId",
    "signature": "getAssetId()",
    "insertText": "getAssetId()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "getName",
    "signature": "getName()",
    "insertText": "getName()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "getOpacity",
    "signature": "getOpacity()",
    "insertText": "getOpacity()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "getShown",
    "signature": "getShown()",
    "insertText": "getShown()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "getVisParams",
    "signature": "getVisParams()",
    "insertText": "getVisParams()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "setAssetId",
    "signature": "setAssetId(assetId)",
    "insertText": "setAssetId(${1:assetId})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.FeatureViewLayer"
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "setName",
    "signature": "setName(name)",
    "insertText": "setName(${1:name})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "setOpacity",
    "signature": "setOpacity(opacity)",
    "insertText": "setOpacity(${1:opacity})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "setShown",
    "signature": "setShown(shown)",
    "insertText": "setShown(${1:shown})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.FeatureViewLayer",
    "name": "setVisParams",
    "signature": "setVisParams(visParams)",
    "insertText": "setVisParams(${1:visParams})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.FeatureViewLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "fromGeometry",
    "signature": "fromGeometry(geometry)",
    "insertText": "fromGeometry(${1:geometry})",
    "doc": "Returns this geometry layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "geometries",
    "signature": "geometries()",
    "insertText": "geometries()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "get",
    "signature": "get(key)",
    "insertText": "get(${1:key})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "getColor",
    "signature": "getColor()",
    "insertText": "getColor()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "getEeObject",
    "signature": "getEeObject()",
    "insertText": "getEeObject()",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Feature"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "getLocked",
    "signature": "getLocked()",
    "insertText": "getLocked()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "getName",
    "signature": "getName()",
    "insertText": "getName()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "getShown",
    "signature": "getShown()",
    "insertText": "getShown()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "openConfigurationDialog",
    "signature": "openConfigurationDialog()",
    "insertText": "openConfigurationDialog()",
    "doc": "Returns the geometry layer to be updated by the dialog.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "set",
    "signature": "set(keyOrDict, value)",
    "insertText": "set(${1:keyOrDict}, ${2:value})",
    "doc": "Returns this ui.data.ActiveDictionary.",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "setColor",
    "signature": "setColor(color)",
    "insertText": "setColor(${1:color})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "setLocked",
    "signature": "setLocked(locked)",
    "insertText": "setLocked(${1:locked})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "setName",
    "signature": "setName(name)",
    "insertText": "setName(${1:name})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "setShown",
    "signature": "setShown(shown)",
    "insertText": "setShown(${1:shown})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.GeometryLayer"
  },
  {
    "receiver": "ui.Map.GeometryLayer",
    "name": "toGeometry",
    "signature": "toGeometry()",
    "insertText": "toGeometry()",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Geometry"
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "getEeObject",
    "signature": "getEeObject()",
    "insertText": "getEeObject()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "getName",
    "signature": "getName()",
    "insertText": "getName()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "getOpacity",
    "signature": "getOpacity()",
    "insertText": "getOpacity()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "getShown",
    "signature": "getShown()",
    "insertText": "getShown()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "getVisParams",
    "signature": "getVisParams()",
    "insertText": "getVisParams()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "setEeObject",
    "signature": "setEeObject(eeObject)",
    "insertText": "setEeObject(${1:eeObject})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.Layer"
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "setName",
    "signature": "setName(name)",
    "insertText": "setName(${1:name})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "setOpacity",
    "signature": "setOpacity(opacity)",
    "insertText": "setOpacity(${1:opacity})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "setShown",
    "signature": "setShown(shown)",
    "insertText": "setShown(${1:shown})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Layer",
    "name": "setVisParams",
    "signature": "setVisParams(visParams)",
    "insertText": "setVisParams(${1:visParams})",
    "doc": "Returns this map layer.",
    "kind": "method",
    "returnType": "ui.Map.Layer"
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "add",
    "signature": "add(el)",
    "insertText": "add(${1:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "forEach",
    "signature": "forEach(callback)",
    "insertText": "forEach(${1:callback})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "get",
    "signature": "get(index)",
    "insertText": "get(${1:index})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "getJsArray",
    "signature": "getJsArray()",
    "insertText": "getJsArray()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "insert",
    "signature": "insert(index, el)",
    "insertText": "insert(${1:index}, ${2:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "length",
    "signature": "length()",
    "insertText": "length()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "remove",
    "signature": "remove(el)",
    "insertText": "remove(${1:el})",
    "doc": "Returns the removed element or null if the element was not present in the list.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "reset",
    "signature": "reset(list)",
    "insertText": "reset(${1:list})",
    "doc": "Returns the elements in the list after the reset is applied.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Map.Linker",
    "name": "set",
    "signature": "set(index, el)",
    "insertText": "set(${1:index}, ${2:el})",
    "doc": "Returns this ui.data.ActiveList.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.Panel",
    "name": "add",
    "signature": "add(widget)",
    "insertText": "add(${1:widget})",
    "doc": "Returns this panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.Panel",
    "name": "clear",
    "signature": "clear()",
    "insertText": "clear()",
    "doc": "Returns this panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.Panel",
    "name": "getLayout",
    "signature": "getLayout()",
    "insertText": "getLayout()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel.Layout"
  },
  {
    "receiver": "ui.Panel",
    "name": "insert",
    "signature": "insert(index, widget)",
    "insertText": "insert(${1:index}, ${2:widget})",
    "doc": "Returns this panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.Panel",
    "name": "layout",
    "signature": "layout()",
    "insertText": "layout()",
    "doc": "Get panel layout object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Panel",
    "name": "Layout",
    "signature": "Layout namespace",
    "insertText": "Layout",
    "doc": "Namespace: ui.Panel.Layout",
    "kind": "namespace",
    "returnType": null
  },
  {
    "receiver": "ui.Panel",
    "name": "remove",
    "signature": "remove(widget)",
    "insertText": "remove(${1:widget})",
    "doc": "Returns whether the widget was successfully removed.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Panel",
    "name": "setLayout",
    "signature": "setLayout(layout)",
    "insertText": "setLayout(${1:layout})",
    "doc": "Returns this panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.Panel",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Panel",
    "name": "widgets",
    "signature": "widgets()",
    "insertText": "widgets()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Panel.Layout",
    "name": "absolute",
    "signature": "absolute()",
    "insertText": "absolute()",
    "doc": "If no position is specified, the widget will be placed behind (that is, with a lower z-index than) the positioned widgets.",
    "kind": "method",
    "returnType": "ui.Panel.Layout"
  },
  {
    "receiver": "ui.Panel.Layout",
    "name": "flow",
    "signature": "flow(direction, wrap)",
    "insertText": "flow(${1:direction}, ${2:wrap})",
    "doc": "When multiple widgets are stretched, the available space is split equally among them. Panels are widgets themselves and can be stretched by specifying a \"stretch\" style property.",
    "kind": "method",
    "returnType": "ui.Panel.Layout"
  },
  {
    "receiver": "ui.root",
    "name": "add",
    "signature": "add(widget)",
    "insertText": "add(${1:widget})",
    "doc": "Returns the root panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.root",
    "name": "clear",
    "signature": "clear()",
    "insertText": "clear()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.root",
    "name": "getLayout",
    "signature": "getLayout()",
    "insertText": "getLayout()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel.Layout"
  },
  {
    "receiver": "ui.root",
    "name": "insert",
    "signature": "insert(index, widget)",
    "insertText": "insert(${1:index}, ${2:widget})",
    "doc": "Returns the root panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.root",
    "name": "onResize",
    "signature": "onResize(callback)",
    "insertText": "onResize(${1:callback})",
    "doc": "These fields indicate whether a user's device is mobile, tablet or desktop, the device orientation (portrait or landscape), and the width and height of the window in pixels. See the Width and Height (dp) section of device metrics at https://material.io/resources/devices/.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.root",
    "name": "remove",
    "signature": "remove(widget)",
    "insertText": "remove(${1:widget})",
    "doc": "Returns the removed widget or null if the widget was not present in the root panel.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.root",
    "name": "setKeyHandler",
    "signature": "setKeyHandler(keyCode, handler, description)",
    "insertText": "setKeyHandler(${1:keyCode}, ${2:handler}, ${3:description})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.root",
    "name": "setLayout",
    "signature": "setLayout(layout)",
    "insertText": "setLayout(${1:layout})",
    "doc": "Returns the root panel.",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.root",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "Get root style object.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.root",
    "name": "widgets",
    "signature": "widgets()",
    "insertText": "widgets()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.Select",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Select",
    "name": "getPlaceholder",
    "signature": "getPlaceholder()",
    "insertText": "getPlaceholder()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Select",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Select",
    "name": "items",
    "signature": "items()",
    "insertText": "items()",
    "doc": "Returns the list of items in the selection menu.",
    "kind": "method",
    "returnType": "ui.data.ActiveList"
  },
  {
    "receiver": "ui.Select",
    "name": "onChange",
    "signature": "onChange(callback)",
    "insertText": "onChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Select",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this select.",
    "kind": "method",
    "returnType": "ui.Select"
  },
  {
    "receiver": "ui.Select",
    "name": "setPlaceholder",
    "signature": "setPlaceholder(placeholder)",
    "insertText": "setPlaceholder(${1:placeholder})",
    "doc": "Returns this select.",
    "kind": "method",
    "returnType": "ui.Select"
  },
  {
    "receiver": "ui.Select",
    "name": "setValue",
    "signature": "setValue(value, trigger)",
    "insertText": "setValue(${1:value}, ${2:trigger})",
    "doc": "Returns this select.",
    "kind": "method",
    "returnType": "ui.Select"
  },
  {
    "receiver": "ui.Select",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Select",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "getMax",
    "signature": "getMax()",
    "insertText": "getMax()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "getMin",
    "signature": "getMin()",
    "insertText": "getMin()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "getStep",
    "signature": "getStep()",
    "insertText": "getStep()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "onChange",
    "signature": "onChange(callback)",
    "insertText": "onChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "onSlide",
    "signature": "onSlide(callback)",
    "insertText": "onSlide(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Slider",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui.Slider",
    "name": "setMax",
    "signature": "setMax(value)",
    "insertText": "setMax(${1:value})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui.Slider",
    "name": "setMin",
    "signature": "setMin(value)",
    "insertText": "setMin(${1:value})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui.Slider",
    "name": "setStep",
    "signature": "setStep(value)",
    "insertText": "setStep(${1:value})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui.Slider",
    "name": "setValue",
    "signature": "setValue(value, trigger)",
    "insertText": "setValue(${1:value}, ${2:trigger})",
    "doc": "Returns this slider.",
    "kind": "method",
    "returnType": "ui.Slider"
  },
  {
    "receiver": "ui.Slider",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Slider",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "getFirstPanel",
    "signature": "getFirstPanel()",
    "insertText": "getFirstPanel()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "getOrientation",
    "signature": "getOrientation()",
    "insertText": "getOrientation()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "getPanel",
    "signature": "getPanel(index)",
    "insertText": "getPanel(${1:index})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "getSecondPanel",
    "signature": "getSecondPanel()",
    "insertText": "getSecondPanel()",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "getWipe",
    "signature": "getWipe()",
    "insertText": "getWipe()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "setFirstPanel",
    "signature": "setFirstPanel(panel)",
    "insertText": "setFirstPanel(${1:panel})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.SplitPanel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "setOrientation",
    "signature": "setOrientation(orientation)",
    "insertText": "setOrientation(${1:orientation})",
    "doc": "Returns this split panel.",
    "kind": "method",
    "returnType": "ui.SplitPanel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "setPanel",
    "signature": "setPanel(index, panel)",
    "insertText": "setPanel(${1:index}, ${2:panel})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.Panel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "setSecondPanel",
    "signature": "setSecondPanel(panel)",
    "insertText": "setSecondPanel(${1:panel})",
    "doc": "",
    "kind": "method",
    "returnType": "ui.SplitPanel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "setWipe",
    "signature": "setWipe(wipe)",
    "insertText": "setWipe(${1:wipe})",
    "doc": "Returns this split panel.",
    "kind": "method",
    "returnType": "ui.SplitPanel"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.SplitPanel",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Textbox",
    "name": "getDisabled",
    "signature": "getDisabled()",
    "insertText": "getDisabled()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Textbox",
    "name": "getPlaceholder",
    "signature": "getPlaceholder()",
    "insertText": "getPlaceholder()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Textbox",
    "name": "getValue",
    "signature": "getValue()",
    "insertText": "getValue()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Textbox",
    "name": "onChange",
    "signature": "onChange(callback)",
    "insertText": "onChange(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Textbox",
    "name": "setDisabled",
    "signature": "setDisabled(disabled)",
    "insertText": "setDisabled(${1:disabled})",
    "doc": "Returns this textbox.",
    "kind": "method",
    "returnType": "ui.Textbox"
  },
  {
    "receiver": "ui.Textbox",
    "name": "setPlaceholder",
    "signature": "setPlaceholder(placeholder)",
    "insertText": "setPlaceholder(${1:placeholder})",
    "doc": "Returns this select.",
    "kind": "method",
    "returnType": "ui.Textbox"
  },
  {
    "receiver": "ui.Textbox",
    "name": "setValue",
    "signature": "setValue(value, trigger)",
    "insertText": "setValue(${1:value}, ${2:trigger})",
    "doc": "Returns this textbox.",
    "kind": "method",
    "returnType": "ui.Textbox"
  },
  {
    "receiver": "ui.Textbox",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Textbox",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "getImage",
    "signature": "getImage()",
    "insertText": "getImage()",
    "doc": "",
    "kind": "method",
    "returnType": "ee.Image"
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "getParams",
    "signature": "getParams()",
    "insertText": "getParams()",
    "doc": "Returns the parameters used in generating the thumbnail.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "onClick",
    "signature": "onClick(callback)",
    "insertText": "onClick(${1:callback})",
    "doc": "Returns an ID which can be passed to unlisten() to unregister the callback.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "setImage",
    "signature": "setImage(image)",
    "insertText": "setImage(${1:image})",
    "doc": "Returns this thumbnail.",
    "kind": "method",
    "returnType": "ui.Thumbnail"
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "setParams",
    "signature": "setParams(params)",
    "insertText": "setParams(${1:params})",
    "doc": "Returns this thumbnail.",
    "kind": "method",
    "returnType": "ui.Thumbnail"
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "style",
    "signature": "style()",
    "insertText": "style()",
    "doc": "- position ('top-right', 'top-center', 'top-left', 'bottom-right', ...)",
    "kind": "method",
    "returnType": "ui.data.ActiveDictionary"
  },
  {
    "receiver": "ui.Thumbnail",
    "name": "unlisten",
    "signature": "unlisten(idOrType)",
    "insertText": "unlisten(${1:idOrType})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.url",
    "name": "get",
    "signature": "get(key, default)",
    "insertText": "get(${1:key}, ${2:default})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.url",
    "name": "set",
    "signature": "set(keyOrDict, value)",
    "insertText": "set(${1:keyOrDict}, ${2:value})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "clear",
    "signature": "clear()",
    "insertText": "clear()",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "clearTimeout",
    "signature": "clearTimeout(timeoutKey)",
    "insertText": "clearTimeout(${1:timeoutKey})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "debounce",
    "signature": "debounce(func, delay, scope)",
    "insertText": "debounce(${1:func}, ${2:delay}, ${3:scope})",
    "doc": "Returns the debounced function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "getCurrentPosition",
    "signature": "getCurrentPosition(success, error)",
    "insertText": "getCurrentPosition(${1:success}, ${2:error})",
    "doc": "",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "rateLimit",
    "signature": "rateLimit(func, delay, scope)",
    "insertText": "rateLimit(${1:func}, ${2:delay}, ${3:scope})",
    "doc": "Returns the rate-limited function.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "setInterval",
    "signature": "setInterval(func, delay)",
    "insertText": "setInterval(${1:func}, ${2:delay})",
    "doc": "Returns a key that can be passed to ui.util.clearTimeout to remove the timeout.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "setTimeout",
    "signature": "setTimeout(func, delay)",
    "insertText": "setTimeout(${1:func}, ${2:delay})",
    "doc": "Returns a key that can be passed to ui.util.clearTimeout to remove the timeout.",
    "kind": "method",
    "returnType": null
  },
  {
    "receiver": "ui.util",
    "name": "throttle",
    "signature": "throttle(func, delay, scope)",
    "insertText": "throttle(${1:func}, ${2:delay}, ${3:scope})",
    "doc": "Returns the wrapped function.",
    "kind": "method",
    "returnType": null
  }
];
});
