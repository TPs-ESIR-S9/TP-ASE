/**
 */
package roboML;

import org.eclipse.emf.ecore.EAttribute;
import org.eclipse.emf.ecore.EClass;
import org.eclipse.emf.ecore.EEnum;
import org.eclipse.emf.ecore.EPackage;
import org.eclipse.emf.ecore.EReference;

/**
 * <!-- begin-user-doc -->
 * The <b>Package</b> for the model.
 * It contains accessors for the meta objects to represent
 * <ul>
 *   <li>each class,</li>
 *   <li>each feature of each class,</li>
 *   <li>each operation of each class,</li>
 *   <li>each enum,</li>
 *   <li>and each data type</li>
 * </ul>
 * <!-- end-user-doc -->
 * @see roboML.RoboMLFactory
 * @model kind="package"
 * @generated
 */
public interface RoboMLPackage extends EPackage {
	/**
	 * The package name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNAME = "roboML";

	/**
	 * The package namespace URI.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_URI = "http://www.example.org/roboML";

	/**
	 * The package namespace name.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	String eNS_PREFIX = "roboML";

	/**
	 * The singleton instance of the package.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 */
	RoboMLPackage eINSTANCE = roboML.impl.RoboMLPackageImpl.init();

	/**
	 * The meta object id for the '{@link roboML.impl.UnitImpl <em>Unit</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.UnitImpl
	 * @see roboML.impl.RoboMLPackageImpl#getUnit()
	 * @generated
	 */
	int UNIT = 0;

	/**
	 * The feature id for the '<em><b>Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UNIT__TYPE = 0;

	/**
	 * The number of structural features of the '<em>Unit</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UNIT_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Unit</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int UNIT_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.StatementImpl <em>Statement</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.StatementImpl
	 * @see roboML.impl.RoboMLPackageImpl#getStatement()
	 * @generated
	 */
	int STATEMENT = 1;

	/**
	 * The number of structural features of the '<em>Statement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATEMENT_FEATURE_COUNT = 0;

	/**
	 * The number of operations of the '<em>Statement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int STATEMENT_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.DeplacementImpl <em>Deplacement</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.DeplacementImpl
	 * @see roboML.impl.RoboMLPackageImpl#getDeplacement()
	 * @generated
	 */
	int DEPLACEMENT = 2;

	/**
	 * The feature id for the '<em><b>Unit</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DEPLACEMENT__UNIT = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Deplacement Distance</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DEPLACEMENT__DEPLACEMENT_DISTANCE = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The feature id for the '<em><b>Movement Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DEPLACEMENT__MOVEMENT_TYPE = STATEMENT_FEATURE_COUNT + 2;

	/**
	 * The number of structural features of the '<em>Deplacement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DEPLACEMENT_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 3;

	/**
	 * The number of operations of the '<em>Deplacement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DEPLACEMENT_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.RotationImpl <em>Rotation</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.RotationImpl
	 * @see roboML.impl.RoboMLPackageImpl#getRotation()
	 * @generated
	 */
	int ROTATION = 3;

	/**
	 * The feature id for the '<em><b>Rotation Angle</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROTATION__ROTATION_ANGLE = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Rotation Sens</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROTATION__ROTATION_SENS = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Rotation</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROTATION_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Rotation</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROTATION_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.LoopImpl <em>Loop</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.LoopImpl
	 * @see roboML.impl.RoboMLPackageImpl#getLoop()
	 * @generated
	 */
	int LOOP = 4;

	/**
	 * The feature id for the '<em><b>Instruction</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LOOP__INSTRUCTION = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Booleanexpression</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LOOP__BOOLEANEXPRESSION = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The feature id for the '<em><b>Variable</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LOOP__VARIABLE = STATEMENT_FEATURE_COUNT + 2;

	/**
	 * The number of structural features of the '<em>Loop</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LOOP_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 3;

	/**
	 * The number of operations of the '<em>Loop</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int LOOP_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.EntityImpl <em>Entity</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.EntityImpl
	 * @see roboML.impl.RoboMLPackageImpl#getEntity()
	 * @generated
	 */
	int ENTITY = 19;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY__ENTITY_TYPE = 0;

	/**
	 * The number of structural features of the '<em>Entity</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Entity</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ENTITY_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.BooleanExpressionImpl <em>Boolean Expression</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.BooleanExpressionImpl
	 * @see roboML.impl.RoboMLPackageImpl#getBooleanExpression()
	 * @generated
	 */
	int BOOLEAN_EXPRESSION = 5;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BOOLEAN_EXPRESSION__ENTITY_TYPE = ENTITY__ENTITY_TYPE;

	/**
	 * The feature id for the '<em><b>Element A</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BOOLEAN_EXPRESSION__ELEMENT_A = ENTITY_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Element B</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BOOLEAN_EXPRESSION__ELEMENT_B = ENTITY_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Boolean Expression</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BOOLEAN_EXPRESSION_FEATURE_COUNT = ENTITY_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Boolean Expression</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int BOOLEAN_EXPRESSION_OPERATION_COUNT = ENTITY_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.FunctionImpl <em>Function</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.FunctionImpl
	 * @see roboML.impl.RoboMLPackageImpl#getFunction()
	 * @generated
	 */
	int FUNCTION = 6;

	/**
	 * The feature id for the '<em><b>Instruction</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION__INSTRUCTION = 0;

	/**
	 * The feature id for the '<em><b>New Attribute</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION__NEW_ATTRIBUTE = 1;

	/**
	 * The feature id for the '<em><b>Return Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION__RETURN_TYPE = 2;

	/**
	 * The feature id for the '<em><b>Variable</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION__VARIABLE = 3;

	/**
	 * The number of structural features of the '<em>Function</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_FEATURE_COUNT = 4;

	/**
	 * The number of operations of the '<em>Function</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.VariableImpl <em>Variable</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.VariableImpl
	 * @see roboML.impl.RoboMLPackageImpl#getVariable()
	 * @generated
	 */
	int VARIABLE = 7;

	/**
	 * The feature id for the '<em><b>Variable Name</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE__VARIABLE_NAME = 0;

	/**
	 * The feature id for the '<em><b>Variable Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE__VARIABLE_VALUE = 1;

	/**
	 * The feature id for the '<em><b>Variableref</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE__VARIABLEREF = 2;

	/**
	 * The number of structural features of the '<em>Variable</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE_FEATURE_COUNT = 3;

	/**
	 * The number of operations of the '<em>Variable</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.AssignementImpl <em>Assignement</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.AssignementImpl
	 * @see roboML.impl.RoboMLPackageImpl#getAssignement()
	 * @generated
	 */
	int ASSIGNEMENT = 8;

	/**
	 * The feature id for the '<em><b>Assignable Variable</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ASSIGNEMENT__ASSIGNABLE_VARIABLE = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Entity</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ASSIGNEMENT__ENTITY = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The number of structural features of the '<em>Assignement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ASSIGNEMENT_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 2;

	/**
	 * The number of operations of the '<em>Assignement</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ASSIGNEMENT_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.SensorImpl <em>Sensor</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.SensorImpl
	 * @see roboML.impl.RoboMLPackageImpl#getSensor()
	 * @generated
	 */
	int SENSOR = 9;

	/**
	 * The feature id for the '<em><b>Sensor Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SENSOR__SENSOR_VALUE = 0;

	/**
	 * The feature id for the '<em><b>Get Sensor Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SENSOR__GET_SENSOR_VALUE = 1;

	/**
	 * The number of structural features of the '<em>Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SENSOR_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SENSOR_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.TimeSensorImpl <em>Time Sensor</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.TimeSensorImpl
	 * @see roboML.impl.RoboMLPackageImpl#getTimeSensor()
	 * @generated
	 */
	int TIME_SENSOR = 10;

	/**
	 * The feature id for the '<em><b>Sensor Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TIME_SENSOR__SENSOR_VALUE = SENSOR__SENSOR_VALUE;

	/**
	 * The feature id for the '<em><b>Get Sensor Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TIME_SENSOR__GET_SENSOR_VALUE = SENSOR__GET_SENSOR_VALUE;

	/**
	 * The number of structural features of the '<em>Time Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TIME_SENSOR_FEATURE_COUNT = SENSOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Time Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int TIME_SENSOR_OPERATION_COUNT = SENSOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.NewEClass12Impl <em>New EClass12</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.NewEClass12Impl
	 * @see roboML.impl.RoboMLPackageImpl#getNewEClass12()
	 * @generated
	 */
	int NEW_ECLASS12 = 11;

	/**
	 * The number of structural features of the '<em>New EClass12</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int NEW_ECLASS12_FEATURE_COUNT = 0;

	/**
	 * The number of operations of the '<em>New EClass12</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int NEW_ECLASS12_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.DistanceSensorImpl <em>Distance Sensor</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.DistanceSensorImpl
	 * @see roboML.impl.RoboMLPackageImpl#getDistanceSensor()
	 * @generated
	 */
	int DISTANCE_SENSOR = 12;

	/**
	 * The feature id for the '<em><b>Sensor Value</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DISTANCE_SENSOR__SENSOR_VALUE = SENSOR__SENSOR_VALUE;

	/**
	 * The feature id for the '<em><b>Get Sensor Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DISTANCE_SENSOR__GET_SENSOR_VALUE = SENSOR__GET_SENSOR_VALUE;

	/**
	 * The number of structural features of the '<em>Distance Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DISTANCE_SENSOR_FEATURE_COUNT = SENSOR_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Distance Sensor</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int DISTANCE_SENSOR_OPERATION_COUNT = SENSOR_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.SetValueImpl <em>Set Value</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.SetValueImpl
	 * @see roboML.impl.RoboMLPackageImpl#getSetValue()
	 * @generated
	 */
	int SET_VALUE = 13;

	/**
	 * The feature id for the '<em><b>Entity To Set</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SET_VALUE__ENTITY_TO_SET = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Set Value</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SET_VALUE_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Set Value</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SET_VALUE_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.SpeedImpl <em>Speed</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.SpeedImpl
	 * @see roboML.impl.RoboMLPackageImpl#getSpeed()
	 * @generated
	 */
	int SPEED = 14;

	/**
	 * The feature id for the '<em><b>Deplacement Speed</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPEED__DEPLACEMENT_SPEED = 0;

	/**
	 * The feature id for the '<em><b>Set Speed Value</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPEED__SET_SPEED_VALUE = 1;

	/**
	 * The number of structural features of the '<em>Speed</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPEED_FEATURE_COUNT = 2;

	/**
	 * The number of operations of the '<em>Speed</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int SPEED_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.FunctionCallImpl <em>Function Call</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.FunctionCallImpl
	 * @see roboML.impl.RoboMLPackageImpl#getFunctionCall()
	 * @generated
	 */
	int FUNCTION_CALL = 15;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_CALL__ENTITY_TYPE = ENTITY__ENTITY_TYPE;

	/**
	 * The feature id for the '<em><b>Function</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_CALL__FUNCTION = ENTITY_FEATURE_COUNT + 0;

	/**
	 * The number of structural features of the '<em>Function Call</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_CALL_FEATURE_COUNT = ENTITY_FEATURE_COUNT + 1;

	/**
	 * The number of operations of the '<em>Function Call</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int FUNCTION_CALL_OPERATION_COUNT = ENTITY_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.ConditionImpl <em>Condition</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.ConditionImpl
	 * @see roboML.impl.RoboMLPackageImpl#getCondition()
	 * @generated
	 */
	int CONDITION = 16;

	/**
	 * The feature id for the '<em><b>Statement If</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION__STATEMENT_IF = STATEMENT_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Statement Else</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION__STATEMENT_ELSE = STATEMENT_FEATURE_COUNT + 1;

	/**
	 * The feature id for the '<em><b>Booleanexpression</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION__BOOLEANEXPRESSION = STATEMENT_FEATURE_COUNT + 2;

	/**
	 * The feature id for the '<em><b>Variable</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION__VARIABLE = STATEMENT_FEATURE_COUNT + 3;

	/**
	 * The number of structural features of the '<em>Condition</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION_FEATURE_COUNT = STATEMENT_FEATURE_COUNT + 4;

	/**
	 * The number of operations of the '<em>Condition</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int CONDITION_OPERATION_COUNT = STATEMENT_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.RoboMLProgramImpl <em>Program</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.RoboMLProgramImpl
	 * @see roboML.impl.RoboMLPackageImpl#getRoboMLProgram()
	 * @generated
	 */
	int ROBO_ML_PROGRAM = 17;

	/**
	 * The feature id for the '<em><b>Function</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROBO_ML_PROGRAM__FUNCTION = 0;

	/**
	 * The number of structural features of the '<em>Program</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROBO_ML_PROGRAM_FEATURE_COUNT = 1;

	/**
	 * The number of operations of the '<em>Program</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ROBO_ML_PROGRAM_OPERATION_COUNT = 0;

	/**
	 * The meta object id for the '{@link roboML.impl.ArithmeticExpressionImpl <em>Arithmetic Expression</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.ArithmeticExpressionImpl
	 * @see roboML.impl.RoboMLPackageImpl#getArithmeticExpression()
	 * @generated
	 */
	int ARITHMETIC_EXPRESSION = 18;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION__ENTITY_TYPE = ENTITY__ENTITY_TYPE;

	/**
	 * The feature id for the '<em><b>Variable</b></em>' containment reference list.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION__VARIABLE = ENTITY_FEATURE_COUNT + 0;

	/**
	 * The feature id for the '<em><b>Element A</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION__ELEMENT_A = ENTITY_FEATURE_COUNT + 1;

	/**
	 * The feature id for the '<em><b>Element B</b></em>' reference.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION__ELEMENT_B = ENTITY_FEATURE_COUNT + 2;

	/**
	 * The number of structural features of the '<em>Arithmetic Expression</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION_FEATURE_COUNT = ENTITY_FEATURE_COUNT + 3;

	/**
	 * The number of operations of the '<em>Arithmetic Expression</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int ARITHMETIC_EXPRESSION_OPERATION_COUNT = ENTITY_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.GetValueImpl <em>Get Value</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.GetValueImpl
	 * @see roboML.impl.RoboMLPackageImpl#getGetValue()
	 * @generated
	 */
	int GET_VALUE = 20;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GET_VALUE__ENTITY_TYPE = ENTITY__ENTITY_TYPE;

	/**
	 * The number of structural features of the '<em>Get Value</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GET_VALUE_FEATURE_COUNT = ENTITY_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Get Value</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int GET_VALUE_OPERATION_COUNT = ENTITY_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.impl.VariableRefImpl <em>Variable Ref</em>}' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.impl.VariableRefImpl
	 * @see roboML.impl.RoboMLPackageImpl#getVariableRef()
	 * @generated
	 */
	int VARIABLE_REF = 21;

	/**
	 * The feature id for the '<em><b>Entity Type</b></em>' attribute.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE_REF__ENTITY_TYPE = ENTITY__ENTITY_TYPE;

	/**
	 * The number of structural features of the '<em>Variable Ref</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE_REF_FEATURE_COUNT = ENTITY_FEATURE_COUNT + 0;

	/**
	 * The number of operations of the '<em>Variable Ref</em>' class.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @generated
	 * @ordered
	 */
	int VARIABLE_REF_OPERATION_COUNT = ENTITY_OPERATION_COUNT + 0;

	/**
	 * The meta object id for the '{@link roboML.UnitMeasure <em>Unit Measure</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.UnitMeasure
	 * @see roboML.impl.RoboMLPackageImpl#getUnitMeasure()
	 * @generated
	 */
	int UNIT_MEASURE = 22;

	/**
	 * The meta object id for the '{@link roboML.Direction <em>Direction</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.Direction
	 * @see roboML.impl.RoboMLPackageImpl#getDirection()
	 * @generated
	 */
	int DIRECTION = 23;

	/**
	 * The meta object id for the '{@link roboML.RMLObject <em>RML Object</em>}' enum.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @see roboML.RMLObject
	 * @see roboML.impl.RoboMLPackageImpl#getRMLObject()
	 * @generated
	 */
	int RML_OBJECT = 24;

	/**
	 * Returns the meta object for class '{@link roboML.Unit <em>Unit</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Unit</em>'.
	 * @see roboML.Unit
	 * @generated
	 */
	EClass getUnit();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Unit#getType <em>Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Type</em>'.
	 * @see roboML.Unit#getType()
	 * @see #getUnit()
	 * @generated
	 */
	EAttribute getUnit_Type();

	/**
	 * Returns the meta object for class '{@link roboML.Statement <em>Statement</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Statement</em>'.
	 * @see roboML.Statement
	 * @generated
	 */
	EClass getStatement();

	/**
	 * Returns the meta object for class '{@link roboML.Deplacement <em>Deplacement</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Deplacement</em>'.
	 * @see roboML.Deplacement
	 * @generated
	 */
	EClass getDeplacement();

	/**
	 * Returns the meta object for the reference '{@link roboML.Deplacement#getUnit <em>Unit</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Unit</em>'.
	 * @see roboML.Deplacement#getUnit()
	 * @see #getDeplacement()
	 * @generated
	 */
	EReference getDeplacement_Unit();

	/**
	 * Returns the meta object for the reference '{@link roboML.Deplacement#getDeplacementDistance <em>Deplacement Distance</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Deplacement Distance</em>'.
	 * @see roboML.Deplacement#getDeplacementDistance()
	 * @see #getDeplacement()
	 * @generated
	 */
	EReference getDeplacement_DeplacementDistance();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Deplacement#getMovementType <em>Movement Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Movement Type</em>'.
	 * @see roboML.Deplacement#getMovementType()
	 * @see #getDeplacement()
	 * @generated
	 */
	EAttribute getDeplacement_MovementType();

	/**
	 * Returns the meta object for class '{@link roboML.Rotation <em>Rotation</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Rotation</em>'.
	 * @see roboML.Rotation
	 * @generated
	 */
	EClass getRotation();

	/**
	 * Returns the meta object for the reference '{@link roboML.Rotation#getRotationAngle <em>Rotation Angle</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Rotation Angle</em>'.
	 * @see roboML.Rotation#getRotationAngle()
	 * @see #getRotation()
	 * @generated
	 */
	EReference getRotation_RotationAngle();

	/**
	 * Returns the meta object for the reference '{@link roboML.Rotation#getRotationSens <em>Rotation Sens</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Rotation Sens</em>'.
	 * @see roboML.Rotation#getRotationSens()
	 * @see #getRotation()
	 * @generated
	 */
	EReference getRotation_RotationSens();

	/**
	 * Returns the meta object for class '{@link roboML.Loop <em>Loop</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Loop</em>'.
	 * @see roboML.Loop
	 * @generated
	 */
	EClass getLoop();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Loop#getInstruction <em>Instruction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Instruction</em>'.
	 * @see roboML.Loop#getInstruction()
	 * @see #getLoop()
	 * @generated
	 */
	EReference getLoop_Instruction();

	/**
	 * Returns the meta object for the reference '{@link roboML.Loop#getBooleanexpression <em>Booleanexpression</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Booleanexpression</em>'.
	 * @see roboML.Loop#getBooleanexpression()
	 * @see #getLoop()
	 * @generated
	 */
	EReference getLoop_Booleanexpression();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Loop#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Variable</em>'.
	 * @see roboML.Loop#getVariable()
	 * @see #getLoop()
	 * @generated
	 */
	EReference getLoop_Variable();

	/**
	 * Returns the meta object for class '{@link roboML.BooleanExpression <em>Boolean Expression</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Boolean Expression</em>'.
	 * @see roboML.BooleanExpression
	 * @generated
	 */
	EClass getBooleanExpression();

	/**
	 * Returns the meta object for the reference '{@link roboML.BooleanExpression#getElementA <em>Element A</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Element A</em>'.
	 * @see roboML.BooleanExpression#getElementA()
	 * @see #getBooleanExpression()
	 * @generated
	 */
	EReference getBooleanExpression_ElementA();

	/**
	 * Returns the meta object for the reference '{@link roboML.BooleanExpression#getElementB <em>Element B</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Element B</em>'.
	 * @see roboML.BooleanExpression#getElementB()
	 * @see #getBooleanExpression()
	 * @generated
	 */
	EReference getBooleanExpression_ElementB();

	/**
	 * Returns the meta object for class '{@link roboML.Function <em>Function</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Function</em>'.
	 * @see roboML.Function
	 * @generated
	 */
	EClass getFunction();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Function#getInstruction <em>Instruction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Instruction</em>'.
	 * @see roboML.Function#getInstruction()
	 * @see #getFunction()
	 * @generated
	 */
	EReference getFunction_Instruction();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Function#getNewAttribute <em>New Attribute</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>New Attribute</em>'.
	 * @see roboML.Function#getNewAttribute()
	 * @see #getFunction()
	 * @generated
	 */
	EAttribute getFunction_NewAttribute();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Function#getReturnType <em>Return Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Return Type</em>'.
	 * @see roboML.Function#getReturnType()
	 * @see #getFunction()
	 * @generated
	 */
	EAttribute getFunction_ReturnType();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Function#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Variable</em>'.
	 * @see roboML.Function#getVariable()
	 * @see #getFunction()
	 * @generated
	 */
	EReference getFunction_Variable();

	/**
	 * Returns the meta object for class '{@link roboML.Variable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Variable</em>'.
	 * @see roboML.Variable
	 * @generated
	 */
	EClass getVariable();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Variable#getVariableName <em>Variable Name</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Variable Name</em>'.
	 * @see roboML.Variable#getVariableName()
	 * @see #getVariable()
	 * @generated
	 */
	EAttribute getVariable_VariableName();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Variable#getVariableValue <em>Variable Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Variable Value</em>'.
	 * @see roboML.Variable#getVariableValue()
	 * @see #getVariable()
	 * @generated
	 */
	EAttribute getVariable_VariableValue();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Variable#getVariableref <em>Variableref</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Variableref</em>'.
	 * @see roboML.Variable#getVariableref()
	 * @see #getVariable()
	 * @generated
	 */
	EReference getVariable_Variableref();

	/**
	 * Returns the meta object for class '{@link roboML.Assignement <em>Assignement</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Assignement</em>'.
	 * @see roboML.Assignement
	 * @generated
	 */
	EClass getAssignement();

	/**
	 * Returns the meta object for the reference '{@link roboML.Assignement#getAssignableVariable <em>Assignable Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Assignable Variable</em>'.
	 * @see roboML.Assignement#getAssignableVariable()
	 * @see #getAssignement()
	 * @generated
	 */
	EReference getAssignement_AssignableVariable();

	/**
	 * Returns the meta object for the reference '{@link roboML.Assignement#getEntity <em>Entity</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Entity</em>'.
	 * @see roboML.Assignement#getEntity()
	 * @see #getAssignement()
	 * @generated
	 */
	EReference getAssignement_Entity();

	/**
	 * Returns the meta object for class '{@link roboML.Sensor <em>Sensor</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Sensor</em>'.
	 * @see roboML.Sensor
	 * @generated
	 */
	EClass getSensor();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Sensor#getSensorValue <em>Sensor Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Sensor Value</em>'.
	 * @see roboML.Sensor#getSensorValue()
	 * @see #getSensor()
	 * @generated
	 */
	EAttribute getSensor_SensorValue();

	/**
	 * Returns the meta object for the reference '{@link roboML.Sensor#getGetSensorValue <em>Get Sensor Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Get Sensor Value</em>'.
	 * @see roboML.Sensor#getGetSensorValue()
	 * @see #getSensor()
	 * @generated
	 */
	EReference getSensor_GetSensorValue();

	/**
	 * Returns the meta object for class '{@link roboML.TimeSensor <em>Time Sensor</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Time Sensor</em>'.
	 * @see roboML.TimeSensor
	 * @generated
	 */
	EClass getTimeSensor();

	/**
	 * Returns the meta object for class '{@link roboML.NewEClass12 <em>New EClass12</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>New EClass12</em>'.
	 * @see roboML.NewEClass12
	 * @generated
	 */
	EClass getNewEClass12();

	/**
	 * Returns the meta object for class '{@link roboML.DistanceSensor <em>Distance Sensor</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Distance Sensor</em>'.
	 * @see roboML.DistanceSensor
	 * @generated
	 */
	EClass getDistanceSensor();

	/**
	 * Returns the meta object for class '{@link roboML.SetValue <em>Set Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Set Value</em>'.
	 * @see roboML.SetValue
	 * @generated
	 */
	EClass getSetValue();

	/**
	 * Returns the meta object for the reference '{@link roboML.SetValue#getEntityToSet <em>Entity To Set</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Entity To Set</em>'.
	 * @see roboML.SetValue#getEntityToSet()
	 * @see #getSetValue()
	 * @generated
	 */
	EReference getSetValue_EntityToSet();

	/**
	 * Returns the meta object for class '{@link roboML.Speed <em>Speed</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Speed</em>'.
	 * @see roboML.Speed
	 * @generated
	 */
	EClass getSpeed();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Speed#getDeplacementSpeed <em>Deplacement Speed</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Deplacement Speed</em>'.
	 * @see roboML.Speed#getDeplacementSpeed()
	 * @see #getSpeed()
	 * @generated
	 */
	EAttribute getSpeed_DeplacementSpeed();

	/**
	 * Returns the meta object for the reference '{@link roboML.Speed#getSetSpeedValue <em>Set Speed Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Set Speed Value</em>'.
	 * @see roboML.Speed#getSetSpeedValue()
	 * @see #getSpeed()
	 * @generated
	 */
	EReference getSpeed_SetSpeedValue();

	/**
	 * Returns the meta object for class '{@link roboML.FunctionCall <em>Function Call</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Function Call</em>'.
	 * @see roboML.FunctionCall
	 * @generated
	 */
	EClass getFunctionCall();

	/**
	 * Returns the meta object for the reference '{@link roboML.FunctionCall#getFunction <em>Function</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Function</em>'.
	 * @see roboML.FunctionCall#getFunction()
	 * @see #getFunctionCall()
	 * @generated
	 */
	EReference getFunctionCall_Function();

	/**
	 * Returns the meta object for class '{@link roboML.Condition <em>Condition</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Condition</em>'.
	 * @see roboML.Condition
	 * @generated
	 */
	EClass getCondition();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Condition#getStatementIf <em>Statement If</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Statement If</em>'.
	 * @see roboML.Condition#getStatementIf()
	 * @see #getCondition()
	 * @generated
	 */
	EReference getCondition_StatementIf();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Condition#getStatementElse <em>Statement Else</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Statement Else</em>'.
	 * @see roboML.Condition#getStatementElse()
	 * @see #getCondition()
	 * @generated
	 */
	EReference getCondition_StatementElse();

	/**
	 * Returns the meta object for the reference '{@link roboML.Condition#getBooleanexpression <em>Booleanexpression</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Booleanexpression</em>'.
	 * @see roboML.Condition#getBooleanexpression()
	 * @see #getCondition()
	 * @generated
	 */
	EReference getCondition_Booleanexpression();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.Condition#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Variable</em>'.
	 * @see roboML.Condition#getVariable()
	 * @see #getCondition()
	 * @generated
	 */
	EReference getCondition_Variable();

	/**
	 * Returns the meta object for class '{@link roboML.RoboMLProgram <em>Program</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Program</em>'.
	 * @see roboML.RoboMLProgram
	 * @generated
	 */
	EClass getRoboMLProgram();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.RoboMLProgram#getFunction <em>Function</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Function</em>'.
	 * @see roboML.RoboMLProgram#getFunction()
	 * @see #getRoboMLProgram()
	 * @generated
	 */
	EReference getRoboMLProgram_Function();

	/**
	 * Returns the meta object for class '{@link roboML.ArithmeticExpression <em>Arithmetic Expression</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Arithmetic Expression</em>'.
	 * @see roboML.ArithmeticExpression
	 * @generated
	 */
	EClass getArithmeticExpression();

	/**
	 * Returns the meta object for the containment reference list '{@link roboML.ArithmeticExpression#getVariable <em>Variable</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the containment reference list '<em>Variable</em>'.
	 * @see roboML.ArithmeticExpression#getVariable()
	 * @see #getArithmeticExpression()
	 * @generated
	 */
	EReference getArithmeticExpression_Variable();

	/**
	 * Returns the meta object for the reference '{@link roboML.ArithmeticExpression#getElementA <em>Element A</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Element A</em>'.
	 * @see roboML.ArithmeticExpression#getElementA()
	 * @see #getArithmeticExpression()
	 * @generated
	 */
	EReference getArithmeticExpression_ElementA();

	/**
	 * Returns the meta object for the reference '{@link roboML.ArithmeticExpression#getElementB <em>Element B</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the reference '<em>Element B</em>'.
	 * @see roboML.ArithmeticExpression#getElementB()
	 * @see #getArithmeticExpression()
	 * @generated
	 */
	EReference getArithmeticExpression_ElementB();

	/**
	 * Returns the meta object for class '{@link roboML.Entity <em>Entity</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Entity</em>'.
	 * @see roboML.Entity
	 * @generated
	 */
	EClass getEntity();

	/**
	 * Returns the meta object for the attribute '{@link roboML.Entity#getEntityType <em>Entity Type</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for the attribute '<em>Entity Type</em>'.
	 * @see roboML.Entity#getEntityType()
	 * @see #getEntity()
	 * @generated
	 */
	EAttribute getEntity_EntityType();

	/**
	 * Returns the meta object for class '{@link roboML.GetValue <em>Get Value</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Get Value</em>'.
	 * @see roboML.GetValue
	 * @generated
	 */
	EClass getGetValue();

	/**
	 * Returns the meta object for class '{@link roboML.VariableRef <em>Variable Ref</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for class '<em>Variable Ref</em>'.
	 * @see roboML.VariableRef
	 * @generated
	 */
	EClass getVariableRef();

	/**
	 * Returns the meta object for enum '{@link roboML.UnitMeasure <em>Unit Measure</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>Unit Measure</em>'.
	 * @see roboML.UnitMeasure
	 * @generated
	 */
	EEnum getUnitMeasure();

	/**
	 * Returns the meta object for enum '{@link roboML.Direction <em>Direction</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>Direction</em>'.
	 * @see roboML.Direction
	 * @generated
	 */
	EEnum getDirection();

	/**
	 * Returns the meta object for enum '{@link roboML.RMLObject <em>RML Object</em>}'.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the meta object for enum '<em>RML Object</em>'.
	 * @see roboML.RMLObject
	 * @generated
	 */
	EEnum getRMLObject();

	/**
	 * Returns the factory that creates the instances of the model.
	 * <!-- begin-user-doc -->
	 * <!-- end-user-doc -->
	 * @return the factory that creates the instances of the model.
	 * @generated
	 */
	RoboMLFactory getRoboMLFactory();

	/**
	 * <!-- begin-user-doc -->
	 * Defines literals for the meta objects that represent
	 * <ul>
	 *   <li>each class,</li>
	 *   <li>each feature of each class,</li>
	 *   <li>each operation of each class,</li>
	 *   <li>each enum,</li>
	 *   <li>and each data type</li>
	 * </ul>
	 * <!-- end-user-doc -->
	 * @generated
	 */
	interface Literals {
		/**
		 * The meta object literal for the '{@link roboML.impl.UnitImpl <em>Unit</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.UnitImpl
		 * @see roboML.impl.RoboMLPackageImpl#getUnit()
		 * @generated
		 */
		EClass UNIT = eINSTANCE.getUnit();

		/**
		 * The meta object literal for the '<em><b>Type</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute UNIT__TYPE = eINSTANCE.getUnit_Type();

		/**
		 * The meta object literal for the '{@link roboML.impl.StatementImpl <em>Statement</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.StatementImpl
		 * @see roboML.impl.RoboMLPackageImpl#getStatement()
		 * @generated
		 */
		EClass STATEMENT = eINSTANCE.getStatement();

		/**
		 * The meta object literal for the '{@link roboML.impl.DeplacementImpl <em>Deplacement</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.DeplacementImpl
		 * @see roboML.impl.RoboMLPackageImpl#getDeplacement()
		 * @generated
		 */
		EClass DEPLACEMENT = eINSTANCE.getDeplacement();

		/**
		 * The meta object literal for the '<em><b>Unit</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DEPLACEMENT__UNIT = eINSTANCE.getDeplacement_Unit();

		/**
		 * The meta object literal for the '<em><b>Deplacement Distance</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference DEPLACEMENT__DEPLACEMENT_DISTANCE = eINSTANCE.getDeplacement_DeplacementDistance();

		/**
		 * The meta object literal for the '<em><b>Movement Type</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute DEPLACEMENT__MOVEMENT_TYPE = eINSTANCE.getDeplacement_MovementType();

		/**
		 * The meta object literal for the '{@link roboML.impl.RotationImpl <em>Rotation</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.RotationImpl
		 * @see roboML.impl.RoboMLPackageImpl#getRotation()
		 * @generated
		 */
		EClass ROTATION = eINSTANCE.getRotation();

		/**
		 * The meta object literal for the '<em><b>Rotation Angle</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ROTATION__ROTATION_ANGLE = eINSTANCE.getRotation_RotationAngle();

		/**
		 * The meta object literal for the '<em><b>Rotation Sens</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ROTATION__ROTATION_SENS = eINSTANCE.getRotation_RotationSens();

		/**
		 * The meta object literal for the '{@link roboML.impl.LoopImpl <em>Loop</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.LoopImpl
		 * @see roboML.impl.RoboMLPackageImpl#getLoop()
		 * @generated
		 */
		EClass LOOP = eINSTANCE.getLoop();

		/**
		 * The meta object literal for the '<em><b>Instruction</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference LOOP__INSTRUCTION = eINSTANCE.getLoop_Instruction();

		/**
		 * The meta object literal for the '<em><b>Booleanexpression</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference LOOP__BOOLEANEXPRESSION = eINSTANCE.getLoop_Booleanexpression();

		/**
		 * The meta object literal for the '<em><b>Variable</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference LOOP__VARIABLE = eINSTANCE.getLoop_Variable();

		/**
		 * The meta object literal for the '{@link roboML.impl.BooleanExpressionImpl <em>Boolean Expression</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.BooleanExpressionImpl
		 * @see roboML.impl.RoboMLPackageImpl#getBooleanExpression()
		 * @generated
		 */
		EClass BOOLEAN_EXPRESSION = eINSTANCE.getBooleanExpression();

		/**
		 * The meta object literal for the '<em><b>Element A</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference BOOLEAN_EXPRESSION__ELEMENT_A = eINSTANCE.getBooleanExpression_ElementA();

		/**
		 * The meta object literal for the '<em><b>Element B</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference BOOLEAN_EXPRESSION__ELEMENT_B = eINSTANCE.getBooleanExpression_ElementB();

		/**
		 * The meta object literal for the '{@link roboML.impl.FunctionImpl <em>Function</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.FunctionImpl
		 * @see roboML.impl.RoboMLPackageImpl#getFunction()
		 * @generated
		 */
		EClass FUNCTION = eINSTANCE.getFunction();

		/**
		 * The meta object literal for the '<em><b>Instruction</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FUNCTION__INSTRUCTION = eINSTANCE.getFunction_Instruction();

		/**
		 * The meta object literal for the '<em><b>New Attribute</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FUNCTION__NEW_ATTRIBUTE = eINSTANCE.getFunction_NewAttribute();

		/**
		 * The meta object literal for the '<em><b>Return Type</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute FUNCTION__RETURN_TYPE = eINSTANCE.getFunction_ReturnType();

		/**
		 * The meta object literal for the '<em><b>Variable</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FUNCTION__VARIABLE = eINSTANCE.getFunction_Variable();

		/**
		 * The meta object literal for the '{@link roboML.impl.VariableImpl <em>Variable</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.VariableImpl
		 * @see roboML.impl.RoboMLPackageImpl#getVariable()
		 * @generated
		 */
		EClass VARIABLE = eINSTANCE.getVariable();

		/**
		 * The meta object literal for the '<em><b>Variable Name</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VARIABLE__VARIABLE_NAME = eINSTANCE.getVariable_VariableName();

		/**
		 * The meta object literal for the '<em><b>Variable Value</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute VARIABLE__VARIABLE_VALUE = eINSTANCE.getVariable_VariableValue();

		/**
		 * The meta object literal for the '<em><b>Variableref</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference VARIABLE__VARIABLEREF = eINSTANCE.getVariable_Variableref();

		/**
		 * The meta object literal for the '{@link roboML.impl.AssignementImpl <em>Assignement</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.AssignementImpl
		 * @see roboML.impl.RoboMLPackageImpl#getAssignement()
		 * @generated
		 */
		EClass ASSIGNEMENT = eINSTANCE.getAssignement();

		/**
		 * The meta object literal for the '<em><b>Assignable Variable</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ASSIGNEMENT__ASSIGNABLE_VARIABLE = eINSTANCE.getAssignement_AssignableVariable();

		/**
		 * The meta object literal for the '<em><b>Entity</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ASSIGNEMENT__ENTITY = eINSTANCE.getAssignement_Entity();

		/**
		 * The meta object literal for the '{@link roboML.impl.SensorImpl <em>Sensor</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.SensorImpl
		 * @see roboML.impl.RoboMLPackageImpl#getSensor()
		 * @generated
		 */
		EClass SENSOR = eINSTANCE.getSensor();

		/**
		 * The meta object literal for the '<em><b>Sensor Value</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SENSOR__SENSOR_VALUE = eINSTANCE.getSensor_SensorValue();

		/**
		 * The meta object literal for the '<em><b>Get Sensor Value</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SENSOR__GET_SENSOR_VALUE = eINSTANCE.getSensor_GetSensorValue();

		/**
		 * The meta object literal for the '{@link roboML.impl.TimeSensorImpl <em>Time Sensor</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.TimeSensorImpl
		 * @see roboML.impl.RoboMLPackageImpl#getTimeSensor()
		 * @generated
		 */
		EClass TIME_SENSOR = eINSTANCE.getTimeSensor();

		/**
		 * The meta object literal for the '{@link roboML.impl.NewEClass12Impl <em>New EClass12</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.NewEClass12Impl
		 * @see roboML.impl.RoboMLPackageImpl#getNewEClass12()
		 * @generated
		 */
		EClass NEW_ECLASS12 = eINSTANCE.getNewEClass12();

		/**
		 * The meta object literal for the '{@link roboML.impl.DistanceSensorImpl <em>Distance Sensor</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.DistanceSensorImpl
		 * @see roboML.impl.RoboMLPackageImpl#getDistanceSensor()
		 * @generated
		 */
		EClass DISTANCE_SENSOR = eINSTANCE.getDistanceSensor();

		/**
		 * The meta object literal for the '{@link roboML.impl.SetValueImpl <em>Set Value</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.SetValueImpl
		 * @see roboML.impl.RoboMLPackageImpl#getSetValue()
		 * @generated
		 */
		EClass SET_VALUE = eINSTANCE.getSetValue();

		/**
		 * The meta object literal for the '<em><b>Entity To Set</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SET_VALUE__ENTITY_TO_SET = eINSTANCE.getSetValue_EntityToSet();

		/**
		 * The meta object literal for the '{@link roboML.impl.SpeedImpl <em>Speed</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.SpeedImpl
		 * @see roboML.impl.RoboMLPackageImpl#getSpeed()
		 * @generated
		 */
		EClass SPEED = eINSTANCE.getSpeed();

		/**
		 * The meta object literal for the '<em><b>Deplacement Speed</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute SPEED__DEPLACEMENT_SPEED = eINSTANCE.getSpeed_DeplacementSpeed();

		/**
		 * The meta object literal for the '<em><b>Set Speed Value</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference SPEED__SET_SPEED_VALUE = eINSTANCE.getSpeed_SetSpeedValue();

		/**
		 * The meta object literal for the '{@link roboML.impl.FunctionCallImpl <em>Function Call</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.FunctionCallImpl
		 * @see roboML.impl.RoboMLPackageImpl#getFunctionCall()
		 * @generated
		 */
		EClass FUNCTION_CALL = eINSTANCE.getFunctionCall();

		/**
		 * The meta object literal for the '<em><b>Function</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference FUNCTION_CALL__FUNCTION = eINSTANCE.getFunctionCall_Function();

		/**
		 * The meta object literal for the '{@link roboML.impl.ConditionImpl <em>Condition</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.ConditionImpl
		 * @see roboML.impl.RoboMLPackageImpl#getCondition()
		 * @generated
		 */
		EClass CONDITION = eINSTANCE.getCondition();

		/**
		 * The meta object literal for the '<em><b>Statement If</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CONDITION__STATEMENT_IF = eINSTANCE.getCondition_StatementIf();

		/**
		 * The meta object literal for the '<em><b>Statement Else</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CONDITION__STATEMENT_ELSE = eINSTANCE.getCondition_StatementElse();

		/**
		 * The meta object literal for the '<em><b>Booleanexpression</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CONDITION__BOOLEANEXPRESSION = eINSTANCE.getCondition_Booleanexpression();

		/**
		 * The meta object literal for the '<em><b>Variable</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference CONDITION__VARIABLE = eINSTANCE.getCondition_Variable();

		/**
		 * The meta object literal for the '{@link roboML.impl.RoboMLProgramImpl <em>Program</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.RoboMLProgramImpl
		 * @see roboML.impl.RoboMLPackageImpl#getRoboMLProgram()
		 * @generated
		 */
		EClass ROBO_ML_PROGRAM = eINSTANCE.getRoboMLProgram();

		/**
		 * The meta object literal for the '<em><b>Function</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ROBO_ML_PROGRAM__FUNCTION = eINSTANCE.getRoboMLProgram_Function();

		/**
		 * The meta object literal for the '{@link roboML.impl.ArithmeticExpressionImpl <em>Arithmetic Expression</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.ArithmeticExpressionImpl
		 * @see roboML.impl.RoboMLPackageImpl#getArithmeticExpression()
		 * @generated
		 */
		EClass ARITHMETIC_EXPRESSION = eINSTANCE.getArithmeticExpression();

		/**
		 * The meta object literal for the '<em><b>Variable</b></em>' containment reference list feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARITHMETIC_EXPRESSION__VARIABLE = eINSTANCE.getArithmeticExpression_Variable();

		/**
		 * The meta object literal for the '<em><b>Element A</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARITHMETIC_EXPRESSION__ELEMENT_A = eINSTANCE.getArithmeticExpression_ElementA();

		/**
		 * The meta object literal for the '<em><b>Element B</b></em>' reference feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EReference ARITHMETIC_EXPRESSION__ELEMENT_B = eINSTANCE.getArithmeticExpression_ElementB();

		/**
		 * The meta object literal for the '{@link roboML.impl.EntityImpl <em>Entity</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.EntityImpl
		 * @see roboML.impl.RoboMLPackageImpl#getEntity()
		 * @generated
		 */
		EClass ENTITY = eINSTANCE.getEntity();

		/**
		 * The meta object literal for the '<em><b>Entity Type</b></em>' attribute feature.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @generated
		 */
		EAttribute ENTITY__ENTITY_TYPE = eINSTANCE.getEntity_EntityType();

		/**
		 * The meta object literal for the '{@link roboML.impl.GetValueImpl <em>Get Value</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.GetValueImpl
		 * @see roboML.impl.RoboMLPackageImpl#getGetValue()
		 * @generated
		 */
		EClass GET_VALUE = eINSTANCE.getGetValue();

		/**
		 * The meta object literal for the '{@link roboML.impl.VariableRefImpl <em>Variable Ref</em>}' class.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.impl.VariableRefImpl
		 * @see roboML.impl.RoboMLPackageImpl#getVariableRef()
		 * @generated
		 */
		EClass VARIABLE_REF = eINSTANCE.getVariableRef();

		/**
		 * The meta object literal for the '{@link roboML.UnitMeasure <em>Unit Measure</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.UnitMeasure
		 * @see roboML.impl.RoboMLPackageImpl#getUnitMeasure()
		 * @generated
		 */
		EEnum UNIT_MEASURE = eINSTANCE.getUnitMeasure();

		/**
		 * The meta object literal for the '{@link roboML.Direction <em>Direction</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.Direction
		 * @see roboML.impl.RoboMLPackageImpl#getDirection()
		 * @generated
		 */
		EEnum DIRECTION = eINSTANCE.getDirection();

		/**
		 * The meta object literal for the '{@link roboML.RMLObject <em>RML Object</em>}' enum.
		 * <!-- begin-user-doc -->
		 * <!-- end-user-doc -->
		 * @see roboML.RMLObject
		 * @see roboML.impl.RoboMLPackageImpl#getRMLObject()
		 * @generated
		 */
		EEnum RML_OBJECT = eINSTANCE.getRMLObject();

	}

} //RoboMLPackage
