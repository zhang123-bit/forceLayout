import Edge from './edge';
import Node from './node.js';
import Center from './center';


let data = {
  nodes: [
    {
      id: '112be738-64b1-4aaf-bcb7-ea0d9388a72e',
      name: 'opt__rid_amap_d'
    }, {
      id: '380eed0d-00bc-4d7c-a9dd-100966583b99',
      name: 'rltn_devc_ioi_roadconfig_1'
    }, {
      id: 'dfd91067-b390-4146-ad00-b77c33bfe677',
      name: 'roadconfig_fork_info'
    }, {
      id: '334bee46-beeb-4639-b5af-8e4462ac21fd',
      name: 'opt__rid_amap_d'
    }, {
      id: 'ebad55f7-debb-421c-8e78-4bc38706c596',
      name: 'trl_ioilane_tp_devcflow_d_1_1'
    }, {
      id: 'cb951a09-3a8b-402d-83b4-7498e574236a',
      name: 'bas_rdnet_ioi_info'
    }, {
      id: '712d8200-fe33-41fc-b213-9888592ad609',
      name: 'rdnet_roadmap'
    }, {
      id: '0b45c599-a696-4d1a-837d-2fffa6e18bee',
      name: 'tp_ftinter_multiflow_md_d_amap_1'
    }, {
      id: 'bb243545-062c-4d79-a70d-a1b3cbcbad55',
      name: 'trl_coil_irgu_flow_rt'
    }, {
      id: '2a180ab3-e951-473d-a050-ddca38903da1',
      name: 'tpwkd_rid_multi_m_fromamap_1'
    }, {
      id: 'ff458dff-7752-4dc4-8478-076c540cc9e5',
      name: 'rltn_wide_inter_ftrid'
    }, {
      id: '975ea9cf-bcfe-465b-bacc-7641d2fddfc7',
      name: 'bas_devc_indexreliability_info_1'
    }, {
      id: '7912df60-e8b2-430b-804a-07d8edc32f72',
      name: 'road_state_model_d'
    }, {
      id: '8056a6ce-923e-444b-9407-57cfe24ecee4',
      name: 'opt_trl_vhc_devcioi_d'
    }, {
      id: 'd1839db4-5cd5-4b74-8f48-49691b30f6c4',
      name: ''
    }, {
      id: 'ae35d895-a3f4-4083-abfc-61b253c3f666',
      name: 'dictionary_info'
    }, {
      id: '69ec6a1b-ac77-45cc-85a8-47ba9ab8727f',
      name: 'rid_info'
    }, {
      id: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      name: 'amap_flow_relation_linemodel__m_v2_1'
    }, {
      id: '7eff1853-2dfd-4a1b-ba42-8d409a7c624c',
      name: 'tp_rid_multi_d_1'
    }, {
      id: 'cc941c29-4704-4c4f-9766-0434553b9f54',
      name: 'rltn_devc_ioi'
    }, {
      id: 'c47e286e-817d-4031-8442-32d16bf7aafa',
      name: 'bas_rdnet_inter_info_roadconfig_1'
    }, {
      id: '8cfdc82f-1a11-4741-ac9e-c931afabf4e7',
      name: 'dwd_bas_rdnet_roadsign_info_t_1'
    }, {
      id: '050f8bc9-8ea9-47e8-85eb-f266f127ea2b',
      name: 'state_lane_nd_saturvolume_w'
    }, {
      id: '595815b1-652d-4a48-8c44-5f845303dabc',
      name: 'bas_rdnet_inter_info'
    }, {
      id: '3617d80d-c875-4b43-a1c7-9649c46d55af',
      name: 'tp_rid_multi_d'
    }, {
      id: '6f5c40c3-f93a-428e-a438-ac7b275b18a5',
      name: 'ioi_info'
    }, {
      id: 'b9a2adbd-1a46-4517-ba3c-79fab0cf6ece',
      name: 'rltn_wide_devc_lane'
    }, {
      id: '0ce75a6b-f6ff-484e-933a-cd5c4a9ac43b',
      name: 'rltn_wide_inter_rid'
    }, {
      id: 'e1be44fb-66a5-48f2-8403-96798957b19f',
      name: 'opt__rid_amap_his_m'
    }, {
      id: 'f1d723fb-fa54-404d-b3f5-34fc6685083b',
      name: 'trl_rid_turndir_tp_flow_reliability_m_utm_1'
    }, {
      id: '164b02b1-34c5-4493-8534-cbbb137a3f80',
      name: 'rltn_wide_inter_ftrid_roadconfig_1'
    }, {
      id: 'aa3b3640-f887-470c-8d1b-b2e6b2a65cf2',
      name: 'dwd_bas_rdnet_ioi_info_t_1'
    }, {
      id: '6c6a0bf9-3d6b-4d6a-838c-a9b805a3432b',
      name: 'trl_lane_irgu_flow_radar_rt'
    }, {
      id: 'cf924541-721b-49c5-9aee-56b59e564186',
      name: 'code_value'
    }, {
      id: '56f2ed4e-9e13-4b1a-bff5-6b70c8463469',
      name: 'rltn_wide_inter_rid'
    }, {
      id: 'ab76170a-83a6-43a8-81be-1b97692e96fc',
      name: 'tp_rid_multi_md_d'
    }, {
      id: '213f4d39-036f-4970-9151-377c9da01244',
      name: 'rltn_wide_inter_ftrid'
    }, {
      id: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      name: 'bas_rdnet_rid_info_roadconfig_1'
    }, {
      id: '929f2ba3-8a8d-43b4-9d18-fd07012bc40c',
      name: 'ioi_info'
    }, {
      id: '54074b33-c326-43d3-ab8c-4c1a67998da9',
      name: 'dwd_bas_rdnet_inter_info_t_1'
    }, {
      id: '16ecdd0b-a453-44bf-a5f6-4c0c14a92655',
      name: 'devc_info'
    }, {
      id: 'd3b4aab5-8068-4a8e-a829-cc214886cb55',
      name: 'tp_rid__default_m_1'
    }, {
      id: 'f447db6c-cd53-4ce9-bde1-41afe45f6604',
      name: 'devc_info'
    }, {
      id: '9c1adc81-ae10-466d-99a1-588fe39780aa',
      name: 'bas_rdnet_lane_info'
    }, {
      id: 'd3ce5474-e993-40b8-aefa-468aca6a4e58',
      name: 'adm_rltn_wide_inter_ridlist_1'
    }, {
      id: 'fedcbce4-29f3-4c9d-8b7c-34babad82699',
      name: 'type_no'
    }, {
      id: '9dd6540c-a001-422f-ad14-2f2fb12df620',
      name: ''
    }, {
      id: '83ef79d6-d17e-4079-bd19-f61da3765edb',
      name: 'fork_info'
    }, {
      id: '21a5562a-88d2-44a0-b244-ac08abed9bfb',
      name: 'type_no'
    }, {
      id: 'e0916b67-c239-4c23-9771-b572a7a885fa',
      name: 'trl_coil_irgu_flow_rt'
    }, {
      id: 'aba0831f-555d-4c1f-a774-a6c6d6c88f71',
      name: 'state_rid_nd_index_m_1'
    }, {
      id: 'bd169849-dfcd-4333-877c-8101bcb76717',
      name: 'rltn_wide_rid_nds'
    }, {
      id: '54157e3c-ffac-4183-a988-e7b4945ae784',
      name: 'bas_devc_indexreliability_info'
    }, {
      id: '31f75895-4c06-4880-b259-9c06cc80a52a',
      name: 'bas_rdnet_inter_info'
    }, {
      id: '198e08b4-5c33-4f6f-b0c4-1c3fd26bd729',
      name: 'trl_rid_tp_flow_d'
    }, {
      id: 'db28fe6d-8106-4918-8567-a2b9fe826b50',
      name: 'fork_info'
    }, {
      id: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      name: 'tp_ftinter_multiflow_d_1'
    }, {
      id: 'fb87449e-7c85-45c0-8048-1f61516ecf41',
      name: 'dwd_bas_rdnet_lane_info_t_1'
    }, {
      id: 'e7875c7f-2db9-472a-bbf2-079a16d2d15c',
      name: 'bas_devc_devc_info_roadconfig_1'
    }, {
      id: '080a751c-7ded-4528-b776-8851d5b3f755',
      name: 'bas_rdnet_rid_topology_info'
    }, {
      id: '9ad2afe1-ac63-4f10-b79a-ca7ae56bca17',
      name: 'odps_dim_std_code_value_1'
    }, {
      id: '4fe92d54-afdc-4711-8797-87ecf63736ec',
      name: 'road_pairwise_routing'
    }, {
      id: 'fc84093c-2537-4a9c-ba95-508ebfdc9ea3',
      name: 'saturvolume_1'
    }, {
      id: '590586d1-c126-43e3-b3f6-0fda52ea13be',
      name: 'dwd_rltn_wide_rid_nds_t_1'
    }, {
      id: '8aa61dd0-f529-440d-a2db-511558e7370d',
      name: 'trl_rid_tp_flow_d'
    }, {
      id: 'cbb8d259-0e21-4ce4-8bd0-709c63e9495d',
      name: 'dictionary_info'
    }, {
      id: 'ee46865d-485b-495c-a31c-cb00f699332d',
      name: 'roadconfig_inter_info'
    }, {
      id: '6ea148ae-fcf8-4f35-999d-045ab56325d7',
      name: 'state_rid_tp_multi_d'
    }, {
      id: 'c1bdb8e5-4569-4f84-838e-4063176bbf67',
      name: 'opt_trl_vhc_gantry_rt'
    }, {
      id: '46bdb6ae-7093-470e-a916-4045b7e947d6',
      name: 'road_pairwise_routing_init_1'
    }, {
      id: 'd2fc61b4-16f5-40fe-b9d1-59912545a50b',
      name: 'rltn_wide_inter_lane'
    }, {
      id: '95c9dbeb-a580-465c-971a-65579c8d1633',
      name: 'code_value'
    }, {
      id: '8ee22708-8bba-412c-9b27-585d79123afb',
      name: 'rid_info'
    }, {
      id: '91f2ac2b-1820-4151-967e-7d60df073583',
      name: 'trl_ioilane_tp_devcflow_d'
    }, {
      id: '1f818996-62ea-43cd-a63e-61981668149d',
      name: 'code_value_1'
    }, {
      id: '33844279-ae43-4d94-a7d8-7e2ffd45f511',
      name: 'trl_interfrid_tp_multiflow_d'
    }, {
      id: 'e9df3a21-a6a0-474d-86a0-5166d4830e94',
      name: 'bas_rdnet_rid_topology_info'
    }, {
      id: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      name: '1'
    }, {
      id: 'e6ceea45-9f16-4d28-aa8a-8f0b95024163',
      name: 'bas_rdnet_roadsign_info'
    }, {
      id: 'd23bafa9-b289-47bb-b385-cbbeeee7dfeb',
      name: 'state_lane_irgu_index_devc_rt'
    }, {
      id: '0aa38e69-74eb-4bc7-aedc-ee82e59fc78a',
      name: 'dwd_bas_rdnet_rid_topology_info_t_1'
    }, {
      id: 'db41cb3c-c269-42ff-a799-7994d730b34e',
      name: 'tpwkd_ftinter_multiflow_m_1'
    }, {
      id: 'f165afea-ebed-49bc-b438-04fff8cfbafd',
      name: 'vhc_state_model_d'
    }, {
      id: '384d5ac0-3d4a-402c-8d91-562e063390c6',
      name: 'bas_rdnet_roadsign_info'
    }, {
      id: 'dc8632d1-7ce6-4440-859a-c84833ee581d',
      name: 'trl_coil_irgu_flow_rt'
    }, {
      id: 'd709f657-dd69-45ed-bf9f-e98a84382892',
      name: 'rltn_wide_inter_lane'
    }, {
      id: '6b5f367f-fded-4d62-9c27-8a18e84b6d38',
      name: 'tpwkd_ftinter_multiflow_m'
    }, {
      id: '49c61f01-d478-40f0-b7e3-55e88765c158',
      name: 'tp_ftinter_multiflow_d'
    }, {
      id: 'e5cd1d18-cc2a-45b0-a6b1-543bc59fbfbd',
      name: 'rltn_wide_inter_ridlist_roadconfig_1'
    }, {
      id: 'fd8ced8a-7c5f-4b76-9eca-c03414206d55',
      name: 'amap_flow_relation_linemodel_m'
    }, {
      id: 'a61e35db-8ab4-471f-aaf6-6c844ca26fe8',
      name: 'tp_rid_multi_d'
    }, {
      id: '87298506-bb91-499a-aa4a-740858bacb8e',
      name: 'rltn_wide_rid_nds'
    }, {
      id: '9acb385e-9d15-4b72-90b5-3ff80bc332ba',
      name: 'rltn_wide_inter_ridlist'
    }, {
      id: '1092fa6b-a8e6-453d-b3f0-6ae6a3410f38',
      name: 'gantry_rid'
    }, {
      id: '36e4a14f-5012-4ff8-a1bd-3517bd4c7ebb',
      name: 'element_dictionary_info'
    }, {
      id: '72bb8517-f0cc-42d4-91dc-83f044bf41dc',
      name: 'opt_trl_vhc_lanecamera_merge_rt'
    }, {
      id: '78110e80-3b59-4c77-aa35-6a6c270d6eee',
      name: 'bas_rdnet_ioi_info'
    }, {
      id: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      name: 'tp_rid_multi_d_1'
    }, {
      id: '789c46f1-dc08-4729-be52-28c0a4a577b4',
      name: 'trl_coil_irgu_flow_rt_1'
    }, {
      id: '1a926638-4790-40cb-9c09-046a6efcfda1',
      name: 'bas_rdnet_lane_info'
    }, {
      id: '0fe01b87-8615-432d-b18d-34f8d2da18eb',
      name: 'bas_rdnet_lane_info'
    }, {
      id: 'e5846057-68e2-4a91-b319-5bb516205800',
      name: 'trl_ioilane_tp_devcflow_d_2_1'
    }, {
      id: '39549b23-3cef-453a-b8ba-7e1955566415',
      name: 'tp_multi_md_d_utm_1'
    }, {
      id: '13186e25-b241-4e16-a1fc-6e14e096c7ec',
      name: 'bas_rdnet_rid_info'
    }, {
      id: '805a8080-a79f-4aea-931d-6f61c8daf2a4',
      name: 'dwd_bas_rdnet_rid_info_t_1'
    }, {
      id: 'fe1b2c6e-70c9-4e9f-98c8-310a7f8cb53d',
      name: 'bas_devc_devc_info'
    }, {
      id: 'bf0231f6-2790-4f31-851c-1e2ad7f9dcba',
      name: 'trl_rid_tpwkd_flowratio_m'
    }, {
      id: 'c3f30272-7207-4c3b-9917-63927ada98af',
      name: 'opt__rid_amap_d_cp1_1'
    }, {
      id: '42a38c49-e141-4f11-9e32-ad7a3916d002',
      name: 'tpwkd_rid_multi_m_1'
    }, {
      id: 'eb259aef-4c91-44bf-a986-9056ceb40e90',
      name: 'bas_rdnet_nds_info'
    }, {
      id: 'f09d1237-3d9c-470f-b9b2-1eccbbaee7be',
      name: 'tp_ftinter_flow_md_d_utm_1'
    }, {
      id: '1dc49bf3-d325-4048-9b77-c2a870b53ac4',
      name: 'tpwkd_rid_multi_m'
    }, {
      id: '07a3e7ff-5e3a-49f7-a73f-bc27bd567bd8',
      name: 'inter_frid_turndir_trid_dtvs_index_m_multiflow_1'
    }, {
      id: '778bb715-a3b1-4b70-94de-7a2cb6182867',
      name: 'bas_rdnet_nds_info_cp1_2'
    }, {
      id: '7150ab8f-d761-4715-adbe-98bb5ba095af',
      name: 'rltn_wide_inter_ridlist'
    }, {
      id: 'fbd6230c-6f3b-4d63-9789-feceda602266',
      name: 'dwd_rltn_wide_inter_ftrid_t_1'
    }, {
      id: '6b416c68-ee98-4139-9c99-541474864882',
      name: 'dim_date_type_no_t_1'
    }, {
      id: 'cf522d76-d30b-4015-b6fd-6be3ef230b05',
      name: 'bas_rdnet_rid_info'
    }, {
      id: '901811ee-60d5-449f-94ae-ac9989814a63',
      name: 'state_rid_nd_index_m'
    }, {
      id: 'e30dd3c8-8f3f-4a73-86f3-86c653a91baa',
      name: 'rid_benchmark_'
    }, {
      id: 'f50471ea-389a-437f-ae95-f1b28b36993d',
      name: 'dwd_rltn_wide_inter_rid_t_1'
    }, {
      id: '7981fce8-a0ec-4331-baab-3dd45ae32ee6',
      name: 'trl_lane_irgu_flow_radar_rt'
    }, {
      id: 'b4ce6393-ab21-4fb6-8bde-6349556bc340',
      name: 'tp_ftinter_flow_default_m'
    }, {
      id: 'ca60d617-f4d8-4048-8ed1-eb4a5373ad43',
      name: 'trl_ftrid_tpwkd_amap_od_m'
    }, {
      id: '16e2c8df-0791-4195-a7c8-65403ba1efe5',
      name: 'trl_rid_turndir_tp_flow_reliability_m'
    }, {
      id: '8603e09a-b44f-43bc-b4d5-0c59dea7ff6f',
      name: 'trl_coil_irgu_flow_rt'
    }, {
      id: '9612af23-1ed2-4c09-915c-1741dbf7e83f',
      name: 'pairwise_routing'
    }, {
      id: '1b745af6-81c0-4a2d-b207-e70601545eb5',
      name: 'inter_frid_turndir_trid_dtvs_index_m'
    }, {
      id: '2c81c912-4905-4bcf-99aa-dc1960ac4d18',
      name: 'tp_rid__default_m'
    }, {
      id: 'b8d72712-f0fa-4c7a-bf2e-6f07e9a47fa5',
      name: 'rltn_wide_devc_lane'
    }, {
      id: '2c9bebda-ffdf-4b33-a67e-ab4bdea6159f',
      name: 'roadconfig_ioi_info'
    }, {
      id: 'c8a5797e-9bc2-4e4c-ab4d-020592c13166',
      name: 'opt_trl_vhc_devcioi_d_1'
    }, {
      id: '5d30e61b-fc0c-4274-b2af-edecb4943e1c',
      name: 'trl_lane_irgu_flow_radar_rt_1'
    }, {
      id: 'da6947b6-5f76-4a99-afa6-65e3e4db3cc7',
      name: 'inter_info'
    }, {
      id: '52a9b4e8-01c1-4bfc-95d4-f7fc970101b9',
      name: 'state_lane_irgu_index_devc_rt'
    }, {
      id: '06ee3b3d-10a5-43c9-8c2c-984555c8b942',
      name: 'with_laneinfo_1'
    }, {
      id: '15033789-8ba9-4616-a250-87cf40879356',
      name: 'trl_ioilane_tp_devcflow_d_box_1'
    }, {
      id: '3e358918-b6d9-4c66-9c03-81f31092603a',
      name: 'inter_info'
    }, {
      id: '6d1268f1-1ec9-4bd1-9f83-c863b82bf679',
      name: 'tp_ftinter_multiflow_md_d'
    }, {
      id: '4f630116-304d-4e5f-9e39-15a996a5b554',
      name: 'trl_rid_tp_flow_d_cp1_2'
    }, {
      id: '5b4bc722-f0f9-45e9-b4b4-7f41f3f427e8',
      name: 'type_no'
    }, {
      id: 'e5e910a8-ee9d-43b0-b030-05bfc9e14dd2',
      name: 'dwd_rltn_wide_inter_lane_t_1'
    }, {
      id: '06c7ab9a-b282-4c34-834e-acf537dffa69',
      name: 'trl_lane_irgu_flow_radar_rt'
    }, {
      id: 'd4f8cc21-879a-4649-8e1d-9847d7f62215',
      name: 'lane_info'
    }, {
      id: 'cd9135af-b782-42fc-911a-fc64084afa7d',
      name: 'lane_info'
    }, {
      id: 'b897c819-9567-4da1-bbc9-6b083d6a0fc1',
      name: 'roadconfig_rid_info'
    }, {
      id: '5abdc1ea-dfea-4dfb-a2e0-3c811d2a83b8',
      name: 'bas_rdnet_nds_info'
    }
  ],
  relations: [
    {
      source: '8056a6ce-923e-444b-9407-57cfe24ecee4',
      target: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      arrow: true
    }, {
      source: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      target: 'fd8ced8a-7c5f-4b76-9eca-c03414206d55',
      arrow: true
    }, {
      source: '712d8200-fe33-41fc-b213-9888592ad609',
      target: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      arrow: true
    }, {
      source: '9ad2afe1-ac63-4f10-b79a-ca7ae56bca17',
      target: 'cf924541-721b-49c5-9aee-56b59e564186',
      arrow: true
    }, {
      source: 'aba0831f-555d-4c1f-a774-a6c6d6c88f71',
      target: '901811ee-60d5-449f-94ae-ac9989814a63',
      arrow: true
    }, {
      source: '72bb8517-f0cc-42d4-91dc-83f044bf41dc',
      target: 'fc84093c-2537-4a9c-ba95-508ebfdc9ea3',
      arrow: true
    }, {
      source: '112be738-64b1-4aaf-bcb7-ea0d9388a72e',
      target: 'c3f30272-7207-4c3b-9917-63927ada98af',
      arrow: true
    }, {
      source: 'cb951a09-3a8b-402d-83b4-7498e574236a',
      target: 'aa3b3640-f887-470c-8d1b-b2e6b2a65cf2',
      arrow: true
    }, {
      source: '1dc49bf3-d325-4048-9b77-c2a870b53ac4',
      target: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      arrow: true
    }, {
      source: 'dc8632d1-7ce6-4440-859a-c84833ee581d',
      target: '8603e09a-b44f-43bc-b4d5-0c59dea7ff6f',
      arrow: true
    }, {
      source: '3617d80d-c875-4b43-a1c7-9649c46d55af',
      target: '42a38c49-e141-4f11-9e32-ad7a3916d002',
      arrow: true
    }, {
      source: 'c1bdb8e5-4569-4f84-838e-4063176bbf67',
      target: 'e5846057-68e2-4a91-b319-5bb516205800',
      arrow: true
    }, {
      source: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      target: '33844279-ae43-4d94-a7d8-7e2ffd45f511',
      arrow: true
    }, {
      source: '7eff1853-2dfd-4a1b-ba42-8d409a7c624c',
      target: 'a61e35db-8ab4-471f-aaf6-6c844ca26fe8',
      arrow: true
    }, {
      source: '2c81c912-4905-4bcf-99aa-dc1960ac4d18',
      target: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      arrow: true
    }, {
      source: '0ce75a6b-f6ff-484e-933a-cd5c4a9ac43b',
      target: 'f50471ea-389a-437f-ae95-f1b28b36993d',
      arrow: true
    }, {
      source: '6c6a0bf9-3d6b-4d6a-838c-a9b805a3432b',
      target: 'ebad55f7-debb-421c-8e78-4bc38706c596',
      arrow: true
    }, {
      source: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      target: '49c61f01-d478-40f0-b7e3-55e88765c158',
      arrow: true
    }, {
      source: '9acb385e-9d15-4b72-90b5-3ff80bc332ba',
      target: 'd3ce5474-e993-40b8-aefa-468aca6a4e58',
      arrow: true
    }, {
      source: '6d1268f1-1ec9-4bd1-9f83-c863b82bf679',
      target: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      arrow: true
    }, {
      source: 'fedcbce4-29f3-4c9d-8b7c-34babad82699',
      target: '6b416c68-ee98-4139-9c99-541474864882',
      arrow: true
    }, {
      source: '06ee3b3d-10a5-43c9-8c2c-984555c8b942',
      target: '712d8200-fe33-41fc-b213-9888592ad609',
      arrow: true
    }, {
      source: '8cfdc82f-1a11-4741-ac9e-c931afabf4e7',
      target: '384d5ac0-3d4a-402c-8d91-562e063390c6',
      arrow: true
    }, {
      source: '52a9b4e8-01c1-4bfc-95d4-f7fc970101b9',
      target: '5d30e61b-fc0c-4274-b2af-edecb4943e1c',
      arrow: true
    }, {
      source: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      target: '7912df60-e8b2-430b-804a-07d8edc32f72',
      arrow: true
    }, {
      source: 'ae35d895-a3f4-4083-abfc-61b253c3f666',
      target: '36e4a14f-5012-4ff8-a1bd-3517bd4c7ebb',
      arrow: true
    }, {
      source: 'c3f30272-7207-4c3b-9917-63927ada98af',
      target: '334bee46-beeb-4639-b5af-8e4462ac21fd',
      arrow: true
    }, {
      source: 'e0916b67-c239-4c23-9771-b572a7a885fa',
      target: '789c46f1-dc08-4729-be52-28c0a4a577b4',
      arrow: true
    }, {
      source: '6ea148ae-fcf8-4f35-999d-045ab56325d7',
      target: 'aba0831f-555d-4c1f-a774-a6c6d6c88f71',
      arrow: true
    }, {
      source: '789c46f1-dc08-4729-be52-28c0a4a577b4',
      target: 'bb243545-062c-4d79-a70d-a1b3cbcbad55',
      arrow: true
    }, {
      source: 'd4f8cc21-879a-4649-8e1d-9847d7f62215',
      target: '9dd6540c-a001-422f-ad14-2f2fb12df620',
      arrow: true
    }, {
      source: 'ca60d617-f4d8-4048-8ed1-eb4a5373ad43',
      target: 'f1d723fb-fa54-404d-b3f5-34fc6685083b',
      arrow: true
    }, {
      source: '8aa61dd0-f529-440d-a2db-511558e7370d',
      target: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      arrow: true
    }, {
      source: '7150ab8f-d761-4715-adbe-98bb5ba095af',
      target: '164b02b1-34c5-4493-8534-cbbb137a3f80',
      arrow: true
    }, {
      source: '213f4d39-036f-4970-9151-377c9da01244',
      target: 'fbd6230c-6f3b-4d63-9789-feceda602266',
      arrow: true
    }, {
      source: 'cc941c29-4704-4c4f-9766-0434553b9f54',
      target: 'e5846057-68e2-4a91-b319-5bb516205800',
      arrow: true
    }, {
      source: 'b9a2adbd-1a46-4517-ba3c-79fab0cf6ece',
      target: '5d30e61b-fc0c-4274-b2af-edecb4943e1c',
      arrow: true
    }, {
      source: 'b897c819-9567-4da1-bbc9-6b083d6a0fc1',
      target: '8ee22708-8bba-412c-9b27-585d79123afb',
      arrow: true
    }, {
      source: 'b8d72712-f0fa-4c7a-bf2e-6f07e9a47fa5',
      target: 'f1d723fb-fa54-404d-b3f5-34fc6685083b',
      arrow: true
    }, {
      source: '1f818996-62ea-43cd-a63e-61981668149d',
      target: 'cf924541-721b-49c5-9aee-56b59e564186',
      arrow: true
    }, {
      source: '198e08b4-5c33-4f6f-b0c4-1c3fd26bd729',
      target: '4f630116-304d-4e5f-9e39-15a996a5b554',
      arrow: true
    }, {
      source: '16e2c8df-0791-4195-a7c8-65403ba1efe5',
      target: 'f09d1237-3d9c-470f-b9b2-1eccbbaee7be',
      arrow: true
    }, {
      source: 'fd8ced8a-7c5f-4b76-9eca-c03414206d55',
      target: '0b45c599-a696-4d1a-837d-2fffa6e18bee',
      arrow: true
    }, {
      source: 'bd169849-dfcd-4333-877c-8101bcb76717',
      target: '590586d1-c126-43e3-b3f6-0fda52ea13be',
      arrow: true
    }, {
      source: 'f09d1237-3d9c-470f-b9b2-1eccbbaee7be',
      target: '6d1268f1-1ec9-4bd1-9f83-c863b82bf679',
      arrow: true
    }, {
      source: '06c7ab9a-b282-4c34-834e-acf537dffa69',
      target: '6c6a0bf9-3d6b-4d6a-838c-a9b805a3432b',
      arrow: true
    }, {
      source: '54074b33-c326-43d3-ab8c-4c1a67998da9',
      target: '31f75895-4c06-4880-b259-9c06cc80a52a',
      arrow: true
    }, {
      source: '56f2ed4e-9e13-4b1a-bff5-6b70c8463469',
      target: '164b02b1-34c5-4493-8534-cbbb137a3f80',
      arrow: true
    }, {
      source: '7912df60-e8b2-430b-804a-07d8edc32f72',
      target: 'f09d1237-3d9c-470f-b9b2-1eccbbaee7be',
      arrow: true
    }, {
      source: '69ec6a1b-ac77-45cc-85a8-47ba9ab8727f',
      target: 'b897c819-9567-4da1-bbc9-6b083d6a0fc1',
      arrow: true
    }, {
      source: '595815b1-652d-4a48-8c44-5f845303dabc',
      target: '54074b33-c326-43d3-ab8c-4c1a67998da9',
      arrow: true
    }, {
      source: 'fc84093c-2537-4a9c-ba95-508ebfdc9ea3',
      target: '050f8bc9-8ea9-47e8-85eb-f266f127ea2b',
      arrow: true
    }, {
      source: '07a3e7ff-5e3a-49f7-a73f-bc27bd567bd8',
      target: '1b745af6-81c0-4a2d-b207-e70601545eb5',
      arrow: true
    }, {
      source: '4f630116-304d-4e5f-9e39-15a996a5b554',
      target: '8aa61dd0-f529-440d-a2db-511558e7370d',
      arrow: true
    }, {
      source: '6f5c40c3-f93a-428e-a438-ac7b275b18a5',
      target: '2c9bebda-ffdf-4b33-a67e-ab4bdea6159f',
      arrow: true
    }, {
      source: '334bee46-beeb-4639-b5af-8e4462ac21fd',
      target: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      arrow: true
    }, {
      source: '9dd6540c-a001-422f-ad14-2f2fb12df620',
      target: 'cd9135af-b782-42fc-911a-fc64084afa7d',
      arrow: true
    }, {
      source: '164b02b1-34c5-4493-8534-cbbb137a3f80',
      target: 'ff458dff-7752-4dc4-8478-076c540cc9e5',
      arrow: true
    }, {
      source: '901811ee-60d5-449f-94ae-ac9989814a63',
      target: '06ee3b3d-10a5-43c9-8c2c-984555c8b942',
      arrow: true
    }, {
      source: 'e9df3a21-a6a0-474d-86a0-5166d4830e94',
      target: '06ee3b3d-10a5-43c9-8c2c-984555c8b942',
      arrow: true
    }, {
      source: '050f8bc9-8ea9-47e8-85eb-f266f127ea2b',
      target: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      arrow: true
    }, {
      source: 'bf0231f6-2790-4f31-851c-1e2ad7f9dcba',
      target: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      arrow: true
    }, {
      source: 'b4ce6393-ab21-4fb6-8bde-6349556bc340',
      target: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      arrow: true
    }, {
      source: 'ee46865d-485b-495c-a31c-cb00f699332d',
      target: 'da6947b6-5f76-4a99-afa6-65e3e4db3cc7',
      arrow: true
    }, {
      source: 'e5846057-68e2-4a91-b319-5bb516205800',
      target: '91f2ac2b-1820-4151-967e-7d60df073583',
      arrow: true
    }, {
      source: '2c9bebda-ffdf-4b33-a67e-ab4bdea6159f',
      target: '929f2ba3-8a8d-43b4-9d18-fd07012bc40c',
      arrow: true
    }, {
      source: 'fb87449e-7c85-45c0-8048-1f61516ecf41',
      target: '9c1adc81-ae10-466d-99a1-588fe39780aa',
      arrow: true
    }, {
      source: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      target: '6ea148ae-fcf8-4f35-999d-045ab56325d7',
      arrow: true
    }, {
      source: '21a5562a-88d2-44a0-b244-ac08abed9bfb',
      target: '789c46f1-dc08-4729-be52-28c0a4a577b4',
      arrow: true
    }, {
      source: 'db41cb3c-c269-42ff-a799-7994d730b34e',
      target: '6b5f367f-fded-4d62-9c27-8a18e84b6d38',
      arrow: true
    }, {
      source: '36e4a14f-5012-4ff8-a1bd-3517bd4c7ebb',
      target: 'cbb8d259-0e21-4ce4-8bd0-709c63e9495d',
      arrow: true
    }, {
      source: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      target: '3617d80d-c875-4b43-a1c7-9649c46d55af',
      arrow: true
    }, {
      source: '5d30e61b-fc0c-4274-b2af-edecb4943e1c',
      target: '7981fce8-a0ec-4331-baab-3dd45ae32ee6',
      arrow: true
    }, {
      source: 'f165afea-ebed-49bc-b438-04fff8cfbafd',
      target: '7eff1853-2dfd-4a1b-ba42-8d409a7c624c',
      arrow: true
    }, {
      source: '1092fa6b-a8e6-453d-b3f0-6ae6a3410f38',
      target: 'f1d723fb-fa54-404d-b3f5-34fc6685083b',
      arrow: true
    }, {
      source: '975ea9cf-bcfe-465b-bacc-7641d2fddfc7',
      target: '54157e3c-ffac-4183-a988-e7b4945ae784',
      arrow: true
    }, {
      source: 'cf522d76-d30b-4015-b6fd-6be3ef230b05',
      target: '805a8080-a79f-4aea-931d-6f61c8daf2a4',
      arrow: true
    }, {
      source: '2a180ab3-e951-473d-a050-ddca38903da1',
      target: '1dc49bf3-d325-4048-9b77-c2a870b53ac4',
      arrow: true
    }, {
      source: 'e5e910a8-ee9d-43b0-b030-05bfc9e14dd2',
      target: 'd2fc61b4-16f5-40fe-b9d1-59912545a50b',
      arrow: true
    }, {
      source: 'e6ceea45-9f16-4d28-aa8a-8f0b95024163',
      target: '8cfdc82f-1a11-4741-ac9e-c931afabf4e7',
      arrow: true
    }, {
      source: '39549b23-3cef-453a-b8ba-7e1955566415',
      target: 'ab76170a-83a6-43a8-81be-1b97692e96fc',
      arrow: true
    }, {
      source: 'd23bafa9-b289-47bb-b385-cbbeeee7dfeb',
      target: '15033789-8ba9-4616-a250-87cf40879356',
      arrow: true
    }, {
      source: 'd1839db4-5cd5-4b74-8f48-49691b30f6c4',
      target: '16ecdd0b-a453-44bf-a5f6-4c0c14a92655',
      arrow: true
    }, {
      source: 'd3ce5474-e993-40b8-aefa-468aca6a4e58',
      target: '7150ab8f-d761-4715-adbe-98bb5ba095af',
      arrow: true
    }, {
      source: 'fbd6230c-6f3b-4d63-9789-feceda602266',
      target: 'ff458dff-7752-4dc4-8478-076c540cc9e5',
      arrow: true
    }, {
      source: '805a8080-a79f-4aea-931d-6f61c8daf2a4',
      target: '13186e25-b241-4e16-a1fc-6e14e096c7ec',
      arrow: true
    }, {
      source: 'f447db6c-cd53-4ce9-bde1-41afe45f6604',
      target: 'd1839db4-5cd5-4b74-8f48-49691b30f6c4',
      arrow: true
    }, {
      source: '778bb715-a3b1-4b70-94de-7a2cb6182867',
      target: 'eb259aef-4c91-44bf-a986-9056ceb40e90',
      arrow: true
    }, {
      source: 'eb259aef-4c91-44bf-a986-9056ceb40e90',
      target: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      arrow: true
    }, {
      source: 'e1be44fb-66a5-48f2-8403-96798957b19f',
      target: '2a180ab3-e951-473d-a050-ddca38903da1',
      arrow: true
    }, {
      source: '42a38c49-e141-4f11-9e32-ad7a3916d002',
      target: '1dc49bf3-d325-4048-9b77-c2a870b53ac4',
      arrow: true
    }, {
      source: 'c47e286e-817d-4031-8442-32d16bf7aafa',
      target: '31f75895-4c06-4880-b259-9c06cc80a52a',
      arrow: true
    }, {
      source: '590586d1-c126-43e3-b3f6-0fda52ea13be',
      target: '87298506-bb91-499a-aa4a-740858bacb8e',
      arrow: true
    }, {
      source: '6b416c68-ee98-4139-9c99-541474864882',
      target: '5b4bc722-f0f9-45e9-b4b4-7f41f3f427e8',
      arrow: true
    }, {
      source: '16ecdd0b-a453-44bf-a5f6-4c0c14a92655',
      target: 'e7875c7f-2db9-472a-bbf2-079a16d2d15c',
      arrow: true
    }, {
      source: '1a926638-4790-40cb-9c09-046a6efcfda1',
      target: '5d30e61b-fc0c-4274-b2af-edecb4943e1c',
      arrow: true
    }, {
      source: '5abdc1ea-dfea-4dfb-a2e0-3c811d2a83b8',
      target: '778bb715-a3b1-4b70-94de-7a2cb6182867',
      arrow: true
    }, {
      source: 'c8a5797e-9bc2-4e4c-ab4d-020592c13166',
      target: '8056a6ce-923e-444b-9407-57cfe24ecee4',
      arrow: true
    }, {
      source: 'd3b4aab5-8068-4a8e-a829-cc214886cb55',
      target: '2c81c912-4905-4bcf-99aa-dc1960ac4d18',
      arrow: true
    }, {
      source: '8603e09a-b44f-43bc-b4d5-0c59dea7ff6f',
      target: 'ebad55f7-debb-421c-8e78-4bc38706c596',
      arrow: true
    }, {
      source: '4fe92d54-afdc-4711-8797-87ecf63736ec',
      target: 'cde82336-ecbc-4373-bf52-3e2e2aac8dd2',
      arrow: true
    }, {
      source: '15033789-8ba9-4616-a250-87cf40879356',
      target: '91f2ac2b-1820-4151-967e-7d60df073583',
      arrow: true
    }, {
      source: 'a61e35db-8ab4-471f-aaf6-6c844ca26fe8',
      target: '39549b23-3cef-453a-b8ba-7e1955566415',
      arrow: true
    }, {
      source: '54157e3c-ffac-4183-a988-e7b4945ae784',
      target: 'e5846057-68e2-4a91-b319-5bb516205800',
      arrow: true
    }, {
      source: 'cf924541-721b-49c5-9aee-56b59e564186',
      target: '380eed0d-00bc-4d7c-a9dd-100966583b99',
      arrow: true
    }, {
      source: '080a751c-7ded-4528-b776-8851d5b3f755',
      target: '0aa38e69-74eb-4bc7-aedc-ee82e59fc78a',
      arrow: true
    }, {
      source: '13186e25-b241-4e16-a1fc-6e14e096c7ec',
      target: 'c47e286e-817d-4031-8442-32d16bf7aafa',
      arrow: true
    }, {
      source: '5b4bc722-f0f9-45e9-b4b4-7f41f3f427e8',
      target: '2a180ab3-e951-473d-a050-ddca38903da1',
      arrow: true
    }, {
      source: 'f50471ea-389a-437f-ae95-f1b28b36993d',
      target: '56f2ed4e-9e13-4b1a-bff5-6b70c8463469',
      arrow: true
    }, {
      source: 'ff458dff-7752-4dc4-8478-076c540cc9e5',
      target: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      arrow: true
    }, {
      source: 'ebad55f7-debb-421c-8e78-4bc38706c596',
      target: '91f2ac2b-1820-4151-967e-7d60df073583',
      arrow: true
    }, {
      source: '78110e80-3b59-4c77-aa35-6a6c270d6eee',
      target: 'c8a5797e-9bc2-4e4c-ab4d-020592c13166',
      arrow: true
    }, {
      source: 'f1d723fb-fa54-404d-b3f5-34fc6685083b',
      target: '16e2c8df-0791-4195-a7c8-65403ba1efe5',
      arrow: true
    }, {
      source: 'e30dd3c8-8f3f-4a73-86f3-86c653a91baa',
      target: 'd3b4aab5-8068-4a8e-a829-cc214886cb55',
      arrow: true
    }, {
      source: 'dfd91067-b390-4146-ad00-b77c33bfe677',
      target: '83ef79d6-d17e-4079-bd19-f61da3765edb',
      arrow: true
    }, {
      source: 'd709f657-dd69-45ed-bf9f-e98a84382892',
      target: 'e5e910a8-ee9d-43b0-b030-05bfc9e14dd2',
      arrow: true
    }, {
      source: 'fe1b2c6e-70c9-4e9f-98c8-310a7f8cb53d',
      target: '975ea9cf-bcfe-465b-bacc-7641d2fddfc7',
      arrow: true
    }, {
      source: '95c9dbeb-a580-465c-971a-65579c8d1633',
      target: '9ad2afe1-ac63-4f10-b79a-ca7ae56bca17',
      arrow: true
    }, {
      source: 'db28fe6d-8106-4918-8567-a2b9fe826b50',
      target: 'dfd91067-b390-4146-ad00-b77c33bfe677',
      arrow: true
    }, {
      source: '0fe01b87-8615-432d-b18d-34f8d2da18eb',
      target: 'fb87449e-7c85-45c0-8048-1f61516ecf41',
      arrow: true
    }, {
      source: '384d5ac0-3d4a-402c-8d91-562e063390c6',
      target: 'e5cd1d18-cc2a-45b0-a6b1-543bc59fbfbd',
      arrow: true
    }, {
      source: '9612af23-1ed2-4c09-915c-1741dbf7e83f',
      target: '46bdb6ae-7093-470e-a916-4045b7e947d6',
      arrow: true
    }, {
      source: '9c1adc81-ae10-466d-99a1-588fe39780aa',
      target: 'e5cd1d18-cc2a-45b0-a6b1-543bc59fbfbd',
      arrow: true
    }, {
      source: 'bb243545-062c-4d79-a70d-a1b3cbcbad55',
      target: 'dc8632d1-7ce6-4440-859a-c84833ee581d',
      arrow: true
    }, {
      source: 'cd9135af-b782-42fc-911a-fc64084afa7d',
      target: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      arrow: true
    }, {
      source: 'e7875c7f-2db9-472a-bbf2-079a16d2d15c',
      target: 'fe1b2c6e-70c9-4e9f-98c8-310a7f8cb53d',
      arrow: true
    }, {
      source: '7981fce8-a0ec-4331-baab-3dd45ae32ee6',
      target: '06c7ab9a-b282-4c34-834e-acf537dffa69',
      arrow: true
    }, {
      source: '46bdb6ae-7093-470e-a916-4045b7e947d6',
      target: '4fe92d54-afdc-4711-8797-87ecf63736ec',
      arrow: true
    }, {
      source: '87298506-bb91-499a-aa4a-740858bacb8e',
      target: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      arrow: true
    }, {
      source: '8ee22708-8bba-412c-9b27-585d79123afb',
      target: 'c47e286e-817d-4031-8442-32d16bf7aafa',
      arrow: true
    }, {
      source: '31f75895-4c06-4880-b259-9c06cc80a52a',
      target: '164b02b1-34c5-4493-8534-cbbb137a3f80',
      arrow: true
    }, {
      source: 'aa3b3640-f887-470c-8d1b-b2e6b2a65cf2',
      target: '78110e80-3b59-4c77-aa35-6a6c270d6eee',
      arrow: true
    }, {
      source: '0aa38e69-74eb-4bc7-aedc-ee82e59fc78a',
      target: 'e9df3a21-a6a0-474d-86a0-5166d4830e94',
      arrow: true
    }, {
      source: 'cbb8d259-0e21-4ce4-8bd0-709c63e9495d',
      target: '1f818996-62ea-43cd-a63e-61981668149d',
      arrow: true
    }, {
      source: 'da6947b6-5f76-4a99-afa6-65e3e4db3cc7',
      target: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      arrow: true
    }, {
      source: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      target: '13186e25-b241-4e16-a1fc-6e14e096c7ec',
      arrow: true
    }, {
      source: '83ef79d6-d17e-4079-bd19-f61da3765edb',
      target: '88a30f2b-1c07-4a9f-b91b-94df9e5150e3',
      arrow: true
    }, {
      source: '49c61f01-d478-40f0-b7e3-55e88765c158',
      target: 'db41cb3c-c269-42ff-a799-7994d730b34e',
      arrow: true
    }, {
      source: '0b45c599-a696-4d1a-837d-2fffa6e18bee',
      target: '6d1268f1-1ec9-4bd1-9f83-c863b82bf679',
      arrow: true
    }, {
      source: '6b5f367f-fded-4d62-9c27-8a18e84b6d38',
      target: 'e22300e9-7b22-47a3-a4a0-ea6887a654f2',
      arrow: true
    }, {
      source: 'd2fc61b4-16f5-40fe-b9d1-59912545a50b',
      target: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      arrow: true
    }, {
      source: 'ab76170a-83a6-43a8-81be-1b97692e96fc',
      target: '0f8b14c9-50d6-4c78-87e6-fedec5113ae7',
      arrow: true
    }, {
      source: 'e5cd1d18-cc2a-45b0-a6b1-543bc59fbfbd',
      target: '7150ab8f-d761-4715-adbe-98bb5ba095af',
      arrow: true
    }, {
      source: '380eed0d-00bc-4d7c-a9dd-100966583b99',
      target: 'cc941c29-4704-4c4f-9766-0434553b9f54',
      arrow: true
    }, {
      source: '91f2ac2b-1820-4151-967e-7d60df073583',
      target: '37ea7982-c677-42b9-aa3b-a8d5e699a76e',
      arrow: true
    }, {
      source: '929f2ba3-8a8d-43b4-9d18-fd07012bc40c',
      target: '380eed0d-00bc-4d7c-a9dd-100966583b99',
      arrow: true
    }, {
      source: '3e358918-b6d9-4c66-9c03-81f31092603a',
      target: 'ee46865d-485b-495c-a31c-cb00f699332d',
      arrow: true
    }, {
      source: '33844279-ae43-4d94-a7d8-7e2ffd45f511',
      target: '07a3e7ff-5e3a-49f7-a73f-bc27bd567bd8',
      arrow: true
    }
  ]
};
let nodes = data.nodes;
nodes.forEach((i) => {
  if (i.id === '112be738-64b1-4aaf-bcb7-ea0d9388a72e') {
    i.type = 'main',
    i.iconType = 'iconapplication',
    i.className = 'icon-background',
    i.Class = Center;
    i.size = 10;
  } else {
    i.Class = Node;
    i.type = 'prop',
    i.iconType = 'iconapplication',
    i.className = 'icon-background',
    i.Class = Node,

    i.size = 10;
  }
  i.degree = Math.random() * 5,
  i.endpoints = [{
    id: 'bottom',
    orientation: [0, 1],
    pos: [0.5, 0]
  },
  {
    id: 'top',
    orientation: [0, -1],
    pos: [0.5, 0]
  },
  {
    id: 'right',
    orientation: [1, 0],
    pos: [0, 0.5]
  }, {
    id: 'left',
    orientation: [-1, 0],
    pos: [0, 0.5]
  }];
});
data.edges = data.relations;
data.edges.forEach((i) => {
  i.sourceNode = i.source,
  i.targetNode = i.target,
  i.source = 'bottom',
  i.target = 'top',
  i.arrowPosition = 0.5,
  i.arrowOffset = 2;
  i.Class = Edge;
  i.type = 'endpoint';
});
delete data.relations;

export default data;


