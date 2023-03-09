/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1.22.2
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as models from './models';

/**
 * PersistentVolumeSpec is the specification of a persistent volume.
 */
export interface V1PersistentVolumeSpec {
    /**
     * AccessModes contains all ways the volume can be mounted. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes
     */
    accessModes?: Array<string>;

    awsElasticBlockStore?: models.V1AWSElasticBlockStoreVolumeSource;

    azureDisk?: models.V1AzureDiskVolumeSource;

    azureFile?: models.V1AzureFilePersistentVolumeSource;

    /**
     * A description of the persistent volume\'s resources and capacity. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#capacity
     */
    capacity?: { [key: string]: string; };

    cephfs?: models.V1CephFSPersistentVolumeSource;

    cinder?: models.V1CinderPersistentVolumeSource;

    claimRef?: models.V1ObjectReference;

    csi?: models.V1CSIPersistentVolumeSource;

    fc?: models.V1FCVolumeSource;

    flexVolume?: models.V1FlexPersistentVolumeSource;

    flocker?: models.V1FlockerVolumeSource;

    gcePersistentDisk?: models.V1GCEPersistentDiskVolumeSource;

    glusterfs?: models.V1GlusterfsPersistentVolumeSource;

    hostPath?: models.V1HostPathVolumeSource;

    iscsi?: models.V1ISCSIPersistentVolumeSource;

    local?: models.V1LocalVolumeSource;

    /**
     * A list of mount options, e.g. [\"ro\", \"soft\"]. Not validated - mount will simply fail if one is invalid. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes/#mount-options
     */
    mountOptions?: Array<string>;

    nfs?: models.V1NFSVolumeSource;

    nodeAffinity?: models.V1VolumeNodeAffinity;

    /**
     * What happens to a persistent volume when released from its claim. Valid options are Retain (default for manually created PersistentVolumes), Delete (default for dynamically provisioned PersistentVolumes), and Recycle (deprecated). Recycle must be supported by the volume plugin underlying this PersistentVolume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#reclaiming
     */
    persistentVolumeReclaimPolicy?: string;

    photonPersistentDisk?: models.V1PhotonPersistentDiskVolumeSource;

    portworxVolume?: models.V1PortworxVolumeSource;

    quobyte?: models.V1QuobyteVolumeSource;

    rbd?: models.V1RBDPersistentVolumeSource;

    scaleIO?: models.V1ScaleIOPersistentVolumeSource;

    /**
     * Name of StorageClass to which this persistent volume belongs. Empty value means that this volume does not belong to any StorageClass.
     */
    storageClassName?: string;

    storageos?: models.V1StorageOSPersistentVolumeSource;

    /**
     * volumeMode defines if a volume is intended to be used with a formatted filesystem or to remain in raw block state. Value of Filesystem is implied when not included in spec.
     */
    volumeMode?: string;

    vsphereVolume?: models.V1VsphereVirtualDiskVolumeSource;

}
