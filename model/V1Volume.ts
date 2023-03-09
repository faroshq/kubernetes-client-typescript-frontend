/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.26.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * Volume represents a named volume in a pod that may be accessed by any container in the pod.
 */
export interface V1Volume {
    awsElasticBlockStore?: models.V1AWSElasticBlockStoreVolumeSource;

    azureDisk?: models.V1AzureDiskVolumeSource;

    azureFile?: models.V1AzureFileVolumeSource;

    cephfs?: models.V1CephFSVolumeSource;

    cinder?: models.V1CinderVolumeSource;

    configMap?: models.V1ConfigMapVolumeSource;

    csi?: models.V1CSIVolumeSource;

    downwardAPI?: models.V1DownwardAPIVolumeSource;

    emptyDir?: models.V1EmptyDirVolumeSource;

    ephemeral?: models.V1EphemeralVolumeSource;

    fc?: models.V1FCVolumeSource;

    flexVolume?: models.V1FlexVolumeSource;

    flocker?: models.V1FlockerVolumeSource;

    gcePersistentDisk?: models.V1GCEPersistentDiskVolumeSource;

    gitRepo?: models.V1GitRepoVolumeSource;

    glusterfs?: models.V1GlusterfsVolumeSource;

    hostPath?: models.V1HostPathVolumeSource;

    iscsi?: models.V1ISCSIVolumeSource;

    /**
     * name of the volume. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name: string;

    nfs?: models.V1NFSVolumeSource;

    persistentVolumeClaim?: models.V1PersistentVolumeClaimVolumeSource;

    photonPersistentDisk?: models.V1PhotonPersistentDiskVolumeSource;

    portworxVolume?: models.V1PortworxVolumeSource;

    projected?: models.V1ProjectedVolumeSource;

    quobyte?: models.V1QuobyteVolumeSource;

    rbd?: models.V1RBDVolumeSource;

    scaleIO?: models.V1ScaleIOVolumeSource;

    secret?: models.V1SecretVolumeSource;

    storageos?: models.V1StorageOSVolumeSource;

    vsphereVolume?: models.V1VsphereVirtualDiskVolumeSource;

}
