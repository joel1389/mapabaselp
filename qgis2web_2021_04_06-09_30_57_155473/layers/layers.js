var wms_layers = [];

var format_Vias_0 = new ol.format.GeoJSON();
var features_Vias_0 = format_Vias_0.readFeatures(json_Vias_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vias_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vias_0.addFeatures(features_Vias_0);
var lyr_Vias_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Vias_0, 
                style: style_Vias_0,
                interactive: true,
                title: '<img src="styles/legend/Vias_0.png" /> Vias'
            });
var format_UNIVERSIDADES_1 = new ol.format.GeoJSON();
var features_UNIVERSIDADES_1 = format_UNIVERSIDADES_1.readFeatures(json_UNIVERSIDADES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UNIVERSIDADES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UNIVERSIDADES_1.addFeatures(features_UNIVERSIDADES_1);
var lyr_UNIVERSIDADES_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_UNIVERSIDADES_1, 
                style: style_UNIVERSIDADES_1,
                interactive: true,
                title: '<img src="styles/legend/UNIVERSIDADES_1.png" /> UNIVERSIDADES'
            });
var format_TERRAZAS_2 = new ol.format.GeoJSON();
var features_TERRAZAS_2 = format_TERRAZAS_2.readFeatures(json_TERRAZAS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TERRAZAS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TERRAZAS_2.addFeatures(features_TERRAZAS_2);
var lyr_TERRAZAS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TERRAZAS_2, 
                style: style_TERRAZAS_2,
                interactive: true,
                title: '<img src="styles/legend/TERRAZAS_2.png" /> TERRAZAS'
            });
var format_TECHO_EDIFICIOS_3 = new ol.format.GeoJSON();
var features_TECHO_EDIFICIOS_3 = format_TECHO_EDIFICIOS_3.readFeatures(json_TECHO_EDIFICIOS_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TECHO_EDIFICIOS_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TECHO_EDIFICIOS_3.addFeatures(features_TECHO_EDIFICIOS_3);
var lyr_TECHO_EDIFICIOS_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TECHO_EDIFICIOS_3, 
                style: style_TECHO_EDIFICIOS_3,
                interactive: true,
                title: '<img src="styles/legend/TECHO_EDIFICIOS_3.png" /> TECHO_EDIFICIOS'
            });
var format_RIOS_ARC_4 = new ol.format.GeoJSON();
var features_RIOS_ARC_4 = format_RIOS_ARC_4.readFeatures(json_RIOS_ARC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOS_ARC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_ARC_4.addFeatures(features_RIOS_ARC_4);
var lyr_RIOS_ARC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RIOS_ARC_4, 
                style: style_RIOS_ARC_4,
                interactive: true,
                title: '<img src="styles/legend/RIOS_ARC_4.png" /> RIOS_ARC'
            });
var format_Manzanas_5 = new ol.format.GeoJSON();
var features_Manzanas_5 = format_Manzanas_5.readFeatures(json_Manzanas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Manzanas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Manzanas_5.addFeatures(features_Manzanas_5);
var lyr_Manzanas_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Manzanas_5, 
                style: style_Manzanas_5,
                interactive: true,
                title: '<img src="styles/legend/Manzanas_5.png" /> Manzanas'
            });
var format_CONTORNO_EDIFICIO_6 = new ol.format.GeoJSON();
var features_CONTORNO_EDIFICIO_6 = format_CONTORNO_EDIFICIO_6.readFeatures(json_CONTORNO_EDIFICIO_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTORNO_EDIFICIO_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTORNO_EDIFICIO_6.addFeatures(features_CONTORNO_EDIFICIO_6);
var lyr_CONTORNO_EDIFICIO_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CONTORNO_EDIFICIO_6, 
                style: style_CONTORNO_EDIFICIO_6,
                interactive: true,
                title: '<img src="styles/legend/CONTORNO_EDIFICIO_6.png" /> CONTORNO_EDIFICIO'
            });
var format_AREAS_VERDES_7 = new ol.format.GeoJSON();
var features_AREAS_VERDES_7 = format_AREAS_VERDES_7.readFeatures(json_AREAS_VERDES_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAS_VERDES_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_VERDES_7.addFeatures(features_AREAS_VERDES_7);
var lyr_AREAS_VERDES_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREAS_VERDES_7, 
                style: style_AREAS_VERDES_7,
                interactive: true,
                title: '<img src="styles/legend/AREAS_VERDES_7.png" /> AREAS_VERDES'
            });
var format_AREAS_ARBOLADAS_8 = new ol.format.GeoJSON();
var features_AREAS_ARBOLADAS_8 = format_AREAS_ARBOLADAS_8.readFeatures(json_AREAS_ARBOLADAS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AREAS_ARBOLADAS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AREAS_ARBOLADAS_8.addFeatures(features_AREAS_ARBOLADAS_8);
var lyr_AREAS_ARBOLADAS_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AREAS_ARBOLADAS_8, 
                style: style_AREAS_ARBOLADAS_8,
                interactive: true,
                title: '<img src="styles/legend/AREAS_ARBOLADAS_8.png" /> AREAS_ARBOLADAS'
            });
var format_Aceras_9 = new ol.format.GeoJSON();
var features_Aceras_9 = format_Aceras_9.readFeatures(json_Aceras_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aceras_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aceras_9.addFeatures(features_Aceras_9);
var lyr_Aceras_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aceras_9, 
                style: style_Aceras_9,
                interactive: true,
                title: '<img src="styles/legend/Aceras_9.png" /> Aceras'
            });

lyr_Vias_0.setVisible(true);lyr_UNIVERSIDADES_1.setVisible(true);lyr_TERRAZAS_2.setVisible(true);lyr_TECHO_EDIFICIOS_3.setVisible(true);lyr_RIOS_ARC_4.setVisible(true);lyr_Manzanas_5.setVisible(true);lyr_CONTORNO_EDIFICIO_6.setVisible(true);lyr_AREAS_VERDES_7.setVisible(true);lyr_AREAS_ARBOLADAS_8.setVisible(true);lyr_Aceras_9.setVisible(true);
var layersList = [lyr_Vias_0,lyr_UNIVERSIDADES_1,lyr_TERRAZAS_2,lyr_TECHO_EDIFICIOS_3,lyr_RIOS_ARC_4,lyr_Manzanas_5,lyr_CONTORNO_EDIFICIO_6,lyr_AREAS_VERDES_7,lyr_AREAS_ARBOLADAS_8,lyr_Aceras_9];
lyr_Vias_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'OBJECTID_2': 'OBJECTID_2', 'Shape_Leng': 'Shape_Leng', 'OBJECTID_3': 'OBJECTID_3', 'OBJECTID_4': 'OBJECTID_4', 'OBJECTID_5': 'OBJECTID_5', 'GDBSANVI': 'GDBSANVI', 'CODIFICA': 'CODIFICA', 'GDBSNOVI': 'GDBSNOVI', 'COD_MAT': 'COD_MAT', 'COD_VIAL': 'COD_VIAL', 'GDBSGERA': 'GDBSGERA', 'GDBSCALZ': 'GDBSCALZ', 'GDBSTIVI': 'GDBSTIVI', 'GDBSDESN': 'GDBSDESN', 'OM': 'OM', 'ruteo': 'ruteo', 'Shape_Le_1': 'Shape_Le_1', 'RuteoIDA': 'RuteoIDA', 'Shape_Le_2': 'Shape_Le_2', });
lyr_UNIVERSIDADES_1.set('fieldAliases', {'Id': 'Id', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'TELEFONO_1': 'TELEFONO_1', 'TELEFONO_2': 'TELEFONO_2', 'TELEFONO_3': 'TELEFONO_3', 'FAX': 'FAX', 'DIRECCION': 'DIRECCION', 'EMAIL': 'EMAIL', 'PAG_WEB': 'PAG_WEB', 'REV': 'REV', 'DEPENDENCI': 'DEPENDENCI', 'clave': 'clave', 'UNI': 'UNI', });
lyr_TERRAZAS_2.set('fieldAliases', {'FID_': 'FID_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_TECHO_EDIFICIOS_3.set('fieldAliases', {'Entidad': 'Entidad', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_RIOS_ARC_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'FROMNODE': 'FROMNODE', 'TONODE': 'TONODE', 'LEFTPOLYGO': 'LEFTPOLYGO', 'RIGHTPOLYG': 'RIGHTPOLYG', 'Shape_Leng': 'Shape_Leng', 'Tipo': 'Tipo', 'Shape_Le_1': 'Shape_Le_1', });
lyr_Manzanas_5.set('fieldAliases', {'Linaje': 'Linaje', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'disolv': 'disolv', });
lyr_CONTORNO_EDIFICIO_6.set('fieldAliases', {'FID_': 'FID_', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AREAS_VERDES_7.set('fieldAliases', {'A_VERDES_': 'A_VERDES_', 'A_VERDES_I': 'A_VERDES_I', 'Tipo': 'Tipo', 'CONTROL': 'CONTROL', 'Nombre': 'Nombre', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_AREAS_ARBOLADAS_8.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'C_MASA_': 'C_MASA_', 'C_MASA_ID': 'C_MASA_ID', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Aceras_9.set('fieldAliases', {'PROCESO': 'PROCESO', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Vias_0.set('fieldImages', {'OBJECTID': '', 'OBJECTID_2': '', 'Shape_Leng': '', 'OBJECTID_3': '', 'OBJECTID_4': '', 'OBJECTID_5': '', 'GDBSANVI': '', 'CODIFICA': '', 'GDBSNOVI': '', 'COD_MAT': '', 'COD_VIAL': '', 'GDBSGERA': '', 'GDBSCALZ': '', 'GDBSTIVI': '', 'GDBSDESN': '', 'OM': '', 'ruteo': '', 'Shape_Le_1': '', 'RuteoIDA': '', 'Shape_Le_2': '', });
lyr_UNIVERSIDADES_1.set('fieldImages', {'Id': '', 'TIPO': '', 'NOMBRE': '', 'TELEFONO_1': '', 'TELEFONO_2': '', 'TELEFONO_3': '', 'FAX': '', 'DIRECCION': '', 'EMAIL': '', 'PAG_WEB': '', 'REV': '', 'DEPENDENCI': '', 'clave': '', 'UNI': '', });
lyr_TERRAZAS_2.set('fieldImages', {'FID_': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_TECHO_EDIFICIOS_3.set('fieldImages', {'Entidad': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_RIOS_ARC_4.set('fieldImages', {'OBJECTID': '', 'ID': '', 'FROMNODE': '', 'TONODE': '', 'LEFTPOLYGO': '', 'RIGHTPOLYG': '', 'Shape_Leng': '', 'Tipo': '', 'Shape_Le_1': '', });
lyr_Manzanas_5.set('fieldImages', {'Linaje': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'disolv': 'Range', });
lyr_CONTORNO_EDIFICIO_6.set('fieldImages', {'FID_': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_AREAS_VERDES_7.set('fieldImages', {'A_VERDES_': '', 'A_VERDES_I': '', 'Tipo': '', 'CONTROL': '', 'Nombre': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_AREAS_ARBOLADAS_8.set('fieldImages', {'AREA': '', 'PERIMETER': '', 'C_MASA_': '', 'C_MASA_ID': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Aceras_9.set('fieldImages', {'PROCESO': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Vias_0.set('fieldLabels', {'OBJECTID': 'no label', 'OBJECTID_2': 'no label', 'Shape_Leng': 'no label', 'OBJECTID_3': 'no label', 'OBJECTID_4': 'no label', 'OBJECTID_5': 'no label', 'GDBSANVI': 'no label', 'CODIFICA': 'no label', 'GDBSNOVI': 'no label', 'COD_MAT': 'no label', 'COD_VIAL': 'no label', 'GDBSGERA': 'no label', 'GDBSCALZ': 'no label', 'GDBSTIVI': 'no label', 'GDBSDESN': 'no label', 'OM': 'no label', 'ruteo': 'no label', 'Shape_Le_1': 'no label', 'RuteoIDA': 'no label', 'Shape_Le_2': 'no label', });
lyr_UNIVERSIDADES_1.set('fieldLabels', {'Id': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'TELEFONO_1': 'no label', 'TELEFONO_2': 'no label', 'TELEFONO_3': 'no label', 'FAX': 'no label', 'DIRECCION': 'no label', 'EMAIL': 'no label', 'PAG_WEB': 'no label', 'REV': 'no label', 'DEPENDENCI': 'no label', 'clave': 'no label', 'UNI': 'no label', });
lyr_TERRAZAS_2.set('fieldLabels', {'FID_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_TECHO_EDIFICIOS_3.set('fieldLabels', {'Entidad': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_RIOS_ARC_4.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'FROMNODE': 'no label', 'TONODE': 'no label', 'LEFTPOLYGO': 'no label', 'RIGHTPOLYG': 'no label', 'Shape_Leng': 'no label', 'Tipo': 'no label', 'Shape_Le_1': 'no label', });
lyr_Manzanas_5.set('fieldLabels', {'Linaje': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'disolv': 'no label', });
lyr_CONTORNO_EDIFICIO_6.set('fieldLabels', {'FID_': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AREAS_VERDES_7.set('fieldLabels', {'A_VERDES_': 'no label', 'A_VERDES_I': 'no label', 'Tipo': 'no label', 'CONTROL': 'no label', 'Nombre': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_AREAS_ARBOLADAS_8.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'C_MASA_': 'no label', 'C_MASA_ID': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Aceras_9.set('fieldLabels', {'PROCESO': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Aceras_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});