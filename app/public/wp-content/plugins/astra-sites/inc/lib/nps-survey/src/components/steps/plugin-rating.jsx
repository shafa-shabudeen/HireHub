import { __ } from '@wordpress/i18n';
import { useState } from 'react';

import useStore from '../../store/store.js';
import {
	handleBack,
	handleCloseNpsSurvey,
	handleNpsSurveyApi,
} from '../../utils/helper.js';
import Button from '../button';
import { HeadingContent, HeadingTitle } from '../dialog';

const PluginRating = function () {
	const { currentStep, npsRating } = useStore( ( state ) => ( {
		currentStep: state.currentStep,
		npsRating: state.npsRating,
	} ) );

	const [ processing, setProcessing ] = useState( false );

	const { dispatch } = useStore();

	const handlePluginRating = async function ( openReview = true ) {
		handleNpsSurveyApi(
			npsRating,
			'',
			'plugin-rating',
			dispatch,
			setProcessing
		);

		handleCloseNpsSurvey( dispatch, currentStep );

		if ( openReview ) {
			window.open(
				'https://wordpress.org/support/plugin/astra-sites/reviews/#new-post',
				'_blank'
			);
		}
	};

	return (
		<div className={ processing && 'opacity-50 cursor-progress' }>
			<div className="flex justify-between">
				<HeadingTitle>
					{ __(
						'Thanks a lot for your feedback! 😍',
						'astra-sites'
					) }
				</HeadingTitle>
			</div>
			<HeadingContent>
				{ __(
					'Could you please do us a favor and give us a 5-star rating on WordPress? It would help others choose Starter Templates with confidence. Thank you!',
					'astra-sites'
				) }
			</HeadingContent>
			<div className="flex justify-between mt-5">
				<Button
					className="relative py-2 px-4 font-semibold bg-transparent text-nps-button-background"
					variant="primary"
					onClick={ ( event ) => handleBack( event, dispatch ) }
					size="small"
				>
					{ __( 'Back', 'astra-sites' ) }
				</Button>
				<div className="flex justify-start gap-5">
					<Button
						variant="link"
						className="py-2 px-0 no-underline font-normal"
						type="button"
						onClick={ () => handlePluginRating( false ) }
						size="small"
					>
						{ __( 'I already did!', 'astra-sites' ) }
					</Button>
					<Button
						variant="primary"
						className="py-2 px-4 font-semibold"
						type="button"
						onClick={ handlePluginRating }
						size="small"
					>
						{ __( 'Rate the Plugin', 'astra-sites' ) }
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PluginRating;
