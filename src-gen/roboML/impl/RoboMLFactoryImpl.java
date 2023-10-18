/**
 */
package roboML.impl;

import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EDataType;
import org.eclipse.emf.ecore.EObject;
import org.eclipse.emf.ecore.EPackage;

import org.eclipse.emf.ecore.impl.EFactoryImpl;

import org.eclipse.emf.ecore.plugin.EcorePlugin;

import roboML.*;

/**
 * <!-- begin-user-doc -->
 * An implementation of the model <b>Factory</b>.
 * <!-- end-user-doc -->
 * @generated
 */
public class RoboMLFactoryImpl extends EFactoryImpl implements RoboMLFactory {
	/**
	 * Creates the default factory implementation.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public static RoboMLFactory init() {
		try {
			RoboMLFactory theRoboMLFactory = (RoboMLFactory) EPackage.Registry.INSTANCE
					.getEFactory(RoboMLPackage.eNS_URI);
			if (theRoboMLFactory != null) {
				return theRoboMLFactory;
			}
		} catch (Exception exception) {
			EcorePlugin.INSTANCE.log(exception);
		}
		return new RoboMLFactoryImpl();
	}

	/**
	 * Creates an instance of the factory.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RoboMLFactoryImpl() {
		super();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public EObject create(EClass eClass) {
		switch (eClass.getClassifierID()) {
		case RoboMLPackage.UNIT:
			return createUnit();
		case RoboMLPackage.DEPLACEMENT:
			return createDeplacement();
		case RoboMLPackage.ROTATION:
			return createRotation();
		case RoboMLPackage.LOOP:
			return createLoop();
		case RoboMLPackage.BOOLEAN_EXPRESSION:
			return createBooleanExpression();
		case RoboMLPackage.FUNCTION:
			return createFunction();
		case RoboMLPackage.VARIABLE:
			return createVariable();
		case RoboMLPackage.ASSIGNEMENT:
			return createAssignement();
		case RoboMLPackage.TIME_SENSOR:
			return createTimeSensor();
		case RoboMLPackage.NEW_ECLASS12:
			return createNewEClass12();
		case RoboMLPackage.DISTANCE_SENSOR:
			return createDistanceSensor();
		case RoboMLPackage.SET_VALUE:
			return createSetValue();
		case RoboMLPackage.SPEED:
			return createSpeed();
		case RoboMLPackage.FUNCTION_CALL:
			return createFunctionCall();
		case RoboMLPackage.CONDITION:
			return createCondition();
		case RoboMLPackage.ROBO_ML_PROGRAM:
			return createRoboMLProgram();
		case RoboMLPackage.ARITHMETIC_EXPRESSION:
			return createArithmeticExpression();
		case RoboMLPackage.ENTITY:
			return createEntity();
		case RoboMLPackage.GET_VALUE:
			return createGetValue();
		case RoboMLPackage.VARIABLE_REF:
			return createVariableRef();
		default:
			throw new IllegalArgumentException("The class '" + eClass.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Object createFromString(EDataType eDataType, String initialValue) {
		switch (eDataType.getClassifierID()) {
		case RoboMLPackage.UNIT_MEASURE:
			return createUnitMeasureFromString(eDataType, initialValue);
		case RoboMLPackage.DIRECTION:
			return createDirectionFromString(eDataType, initialValue);
		case RoboMLPackage.RML_OBJECT:
			return createRMLObjectFromString(eDataType, initialValue);
		default:
			throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public String convertToString(EDataType eDataType, Object instanceValue) {
		switch (eDataType.getClassifierID()) {
		case RoboMLPackage.UNIT_MEASURE:
			return convertUnitMeasureToString(eDataType, instanceValue);
		case RoboMLPackage.DIRECTION:
			return convertDirectionToString(eDataType, instanceValue);
		case RoboMLPackage.RML_OBJECT:
			return convertRMLObjectToString(eDataType, instanceValue);
		default:
			throw new IllegalArgumentException("The datatype '" + eDataType.getName() + "' is not a valid classifier");
		}
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Unit createUnit() {
		UnitImpl unit = new UnitImpl();
		return unit;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Deplacement createDeplacement() {
		DeplacementImpl deplacement = new DeplacementImpl();
		return deplacement;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Rotation createRotation() {
		RotationImpl rotation = new RotationImpl();
		return rotation;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Loop createLoop() {
		LoopImpl loop = new LoopImpl();
		return loop;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public BooleanExpression createBooleanExpression() {
		BooleanExpressionImpl booleanExpression = new BooleanExpressionImpl();
		return booleanExpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Function createFunction() {
		FunctionImpl function = new FunctionImpl();
		return function;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Variable createVariable() {
		VariableImpl variable = new VariableImpl();
		return variable;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Assignement createAssignement() {
		AssignementImpl assignement = new AssignementImpl();
		return assignement;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public TimeSensor createTimeSensor() {
		TimeSensorImpl timeSensor = new TimeSensorImpl();
		return timeSensor;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public NewEClass12 createNewEClass12() {
		NewEClass12Impl newEClass12 = new NewEClass12Impl();
		return newEClass12;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public DistanceSensor createDistanceSensor() {
		DistanceSensorImpl distanceSensor = new DistanceSensorImpl();
		return distanceSensor;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public SetValue createSetValue() {
		SetValueImpl setValue = new SetValueImpl();
		return setValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Speed createSpeed() {
		SpeedImpl speed = new SpeedImpl();
		return speed;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public FunctionCall createFunctionCall() {
		FunctionCallImpl functionCall = new FunctionCallImpl();
		return functionCall;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Condition createCondition() {
		ConditionImpl condition = new ConditionImpl();
		return condition;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RoboMLProgram createRoboMLProgram() {
		RoboMLProgramImpl roboMLProgram = new RoboMLProgramImpl();
		return roboMLProgram;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public ArithmeticExpression createArithmeticExpression() {
		ArithmeticExpressionImpl arithmeticExpression = new ArithmeticExpressionImpl();
		return arithmeticExpression;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public Entity createEntity() {
		EntityImpl entity = new EntityImpl();
		return entity;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public GetValue createGetValue() {
		GetValueImpl getValue = new GetValueImpl();
		return getValue;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public VariableRef createVariableRef() {
		VariableRefImpl variableRef = new VariableRefImpl();
		return variableRef;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public UnitMeasure createUnitMeasureFromString(EDataType eDataType, String initialValue) {
		UnitMeasure result = UnitMeasure.get(initialValue);
		if (result == null)
			throw new IllegalArgumentException(
					"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertUnitMeasureToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public Direction createDirectionFromString(EDataType eDataType, String initialValue) {
		Direction result = Direction.get(initialValue);
		if (result == null)
			throw new IllegalArgumentException(
					"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertDirectionToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public RMLObject createRMLObjectFromString(EDataType eDataType, String initialValue) {
		RMLObject result = RMLObject.get(initialValue);
		if (result == null)
			throw new IllegalArgumentException(
					"The value '" + initialValue + "' is not a valid enumerator of '" + eDataType.getName() + "'");
		return result;
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	public String convertRMLObjectToString(EDataType eDataType, Object instanceValue) {
		return instanceValue == null ? null : instanceValue.toString();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	@Override
	public RoboMLPackage getRoboMLPackage() {
		return (RoboMLPackage) getEPackage();
	}

	/**
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @deprecated
	 * @generated
	 */
	@Deprecated
	public static RoboMLPackage getPackage() {
		return RoboMLPackage.eINSTANCE;
	}

} //RoboMLFactoryImpl
