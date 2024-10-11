import { memo } from '@wordpress/element';
import { __, sprintf } from '@wordpress/i18n';
import { MediaUpload } from '@wordpress/media-utils';
import { useDispatch, useSelect } from '@wordpress/data';

import toast from 'react-hot-toast';

import { classNames, toastBody } from '../helpers';
import { STORE_KEY } from '../store';
import { isValidImageURL } from '../utils/helpers';

import { ArrowUpTrayIcon } from '@heroicons/react/24/outline';

const UploadImage = ( { render } ) => {
	const { setWebsiteImagesAIStep } = useDispatch( STORE_KEY );

	const {
		stepsData: { selectedImages = [] },
	} = useSelect( ( select ) => {
		const { getAIStepData } = select( STORE_KEY );
		return {
			stepsData: getAIStepData(),
		};
	}, [] );

	return (
		<>
			<MediaUpload
				mode="upload"
				allowedTypes={ [ 'image' ] }
				render={
					typeof render === 'function'
						? render
						: ( { open } ) => (
								<button
									type="button"
									onClick={ open }
									className={ classNames(
										'flex flex-col items-center justify-center gap-3 py-[50px] px-[78px] aspect-video bg-zip-app-light-bg border border-solid border-border-tertiary rounded cursor-pointer'
									) }
								>
									<ArrowUpTrayIcon className="w-6 h-6 text-accent-st" />
									<span className="min-w-fit break-keep text-nowrap whitespace-nowrap text-base font-semibold text-zip-body-text">
										{ __( 'Upload images', 'ai-builder' ) }
									</span>
								</button>
						  )
				}
				onSelect={ ( media ) => {
					const uploadedImages = media
						.map( ( image ) => {
							if ( isValidImageURL( image?.url ) ) {
								return image;
							}
							toast.error(
								toastBody( {
									message: sprintf(
										/* translators: %s: file name */
										__(
											'Invalid file name! Please avoid special characters. (%s)',
											'ai-builder'
										),
										image?.filename
									),
								} )
							);
							return null;
						} )
						.filter( ( image ) => image !== null )
						.map( ( image ) => ( {
							id: String( image.id ),
							url: image?.originalImageURL ?? image.url,
							optimized_url:
								image?.sizes?.large?.url ?? image.url,
							engine: '',
							description: image?.description ?? '',
							orientation:
								image?.orientation ??
								( image?.width > image?.height
									? 'landscape'
									: 'portrait' ),
							author_name: image?.author_name ?? '',
							author_url: '',
						} ) )
						.filter(
							( image ) =>
								selectedImages?.findIndex(
									( prevImage ) =>
										String( prevImage.id ) ===
										String( image.id )
								) === -1
						);
					setWebsiteImagesAIStep( [
						...selectedImages,
						...uploadedImages,
					] );
				} }
				multiple
			/>
		</>
	);
};

export default memo( UploadImage );
